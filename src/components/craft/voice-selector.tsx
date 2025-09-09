"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Pause, Play, X } from "lucide-react";
import { cn } from "@/lib/utils";
import WaveSurfer from "wavesurfer.js";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatePresence, motion } from "motion/react";
import voices from "@/data/voices";
import { Voice } from "@/types";
import { toast } from "sonner";

const VoiceSelector = () => {
  const [open, setOpen] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<Voice | null>(null);
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [accent, setAccent] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  // Filter voices based on search query and filters
  const filteredVoices = useMemo(() => {
    return voices.filter((voice) => {
      // Apply accent filter
      if (accent && voice.labels.accent !== accent) {
        return false;
      }

      // Apply gender filter
      if (gender && voice.labels.gender !== gender) {
        return false;
      }

      // Apply age filter
      if (age && voice.labels.age !== age) {
        return false;
      }

      // Apply search query filter if present
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();

        // Search in voice name
        if (voice.name.toLowerCase().includes(query)) {
          return true;
        }

        // Search in voice labels
        return Object.values(voice.labels).some((label) => {
          if (typeof label === "string") {
            return label.toLowerCase().includes(query);
          }
          return false;
        });
      }

      return true;
    });
  }, [searchQuery, accent, gender, age]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    if (!open) {
      setSelectedVoice(null);
      setPlayingVoiceId(null);
      setAccent("");
      setGender("");
      setAge("");
      setSearchQuery("");
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button variant="outline">Select voice</Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-[400px] flex flex-col gap-4 p-4 rounded-2xl h-[500px]"
          side="top"
          sideOffset={8}
        >
          {/* Header */}
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-2">Select a voice</h3>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2.5 top-2.5 size-8 text-muted-foreground"
              onClick={() => setOpen(false)}
            >
              <X className="size-3.5" />
            </Button>
            <Input
              placeholder="Filter voices"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex gap-2 mt-2 overflow-x-auto no-scrollbar py-1">
              {/* Accent */}
              <VoiceFilter
                placeholder="Accent"
                options={[
                  { label: "American", value: "american" },
                  { label: "British", value: "british" },
                  { label: "Australian", value: "australian" },
                  { label: "Irish", value: "irish" },
                  { label: "Swedish", value: "swedish" },
                  { label: "US Southern", value: "us-southern" },
                ]}
                value={accent}
                onValueChange={setAccent}
              />

              {/* Gender */}
              <VoiceFilter
                placeholder="Gender"
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                value={gender}
                onValueChange={setGender}
              />

              {/* Age */}
              <VoiceFilter
                placeholder="Age"
                options={[
                  { label: "Young", value: "young" },
                  { label: "Middle Aged", value: "middle_aged" },
                  { label: "Old", value: "old" },
                ]}
                value={age}
                onValueChange={setAge}
              />

              {/* Reset filters */}
              {(accent || gender || age) && (
                <button
                  className="text-muted-foreground hover:bg-neutral-100 rounded-md p-2 transition-colors"
                  onClick={() => {
                    setAccent("");
                    setGender("");
                    setAge("");
                    setSearchQuery("");
                  }}
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Voices list */}
          <div className="flex flex-col gap-2 h-full overflow-y-auto rounded-2xl p-2 bg-neutral-100 relative">
            {filteredVoices.length === 0 && (
              <div className="text-sm text-muted-foreground flex items-center justify-center h-full">
                No voices found
              </div>
            )}
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredVoices.map((voice: Voice) => (
                <VoiceItem
                  key={voice.voice_id}
                  voice={voice}
                  selectedVoice={selectedVoice}
                  onSelect={() =>
                    setSelectedVoice(selectedVoice === voice ? null : voice)
                  }
                  playingVoiceId={playingVoiceId}
                  onPlayingVoiceIdChange={setPlayingVoiceId}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <Button
            className="w-full bg-blue-800 hover:bg-blue-900"
            disabled={!selectedVoice}
            onClick={() => {
              if (selectedVoice) {
                toast.success(`You've selected ${selectedVoice.name}'s voice`);
                handleOpenChange(false);
              }
            }}
          >
            Select
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const VoiceItem = ({
  voice,
  selectedVoice,
  onSelect,
  playingVoiceId,
  onPlayingVoiceIdChange,
  ref,
}: {
  voice: Voice;
  selectedVoice: Voice | null;
  onSelect: (voice: Voice) => void;
  playingVoiceId: string | null;
  onPlayingVoiceIdChange: (voiceId: string | null) => void;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const MemoizedMeshGradient = useMemo(() => <MeshGradient />, []);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#E1EAEF",
        progressColor: "#657D8B",
        url: voice.preview_url,
        normalize: true,
        barGap: 0.5,
        barWidth: 0.75,
        height: 16,
        cursorColor: "transparent",
      });

      wavesurferRef.current.on("ready", () => {
        if (wavesurferRef.current) {
          setDuration(wavesurferRef.current.getDuration());
        }
      });

      wavesurferRef.current.on("finish", () => {
        setIsPlaying(false);
        wavesurferRef.current?.seekTo(0);
      });

      wavesurferRef.current.on("audioprocess", (time) => {
        setCurrentTime(time);
      });
    }
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [voice.preview_url]);

  useEffect(() => {
    if (playingVoiceId !== voice.voice_id) {
      setIsPlaying(false);
      wavesurferRef.current?.pause();
    }
  }, [playingVoiceId]);

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (playingVoiceId !== voice.voice_id) {
      onPlayingVoiceIdChange(null);
    }
    if (wavesurferRef.current) {
      setIsPlaying(!isPlaying);
      wavesurferRef.current.playPause();
      onPlayingVoiceIdChange(voice.voice_id);
    }
  };

  const handleWaveformClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (wavesurferRef.current) {
      const waveformWidth = waveformRef.current?.clientWidth || 0;
      const clickPosition = e.nativeEvent.offsetX;
      const seekPercentage = clickPosition / waveformWidth;
      const seekTime = seekPercentage * duration;

      setCurrentTime(seekTime);
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "bg-white border flex gap-3 p-2 border-neutral-100 rounded-lg transition-shadow cursor-pointer relative",
        selectedVoice?.voice_id === voice.voice_id &&
          "ring-2 ring-offset-2 ring-blue-500"
      )}
      onClick={() => onSelect(voice)}
      layoutId={voice.voice_id}
      transition={{
        type: "spring",
        duration: 0.3,
        bounce: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
    >
      <button
        className="size-9 rounded-full shrink-0 shadow-lg grid place-content-center relative overflow-hidden play-button group cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          handlePlayPause(e);
        }}
      >
        {MemoizedMeshGradient}
        <div className="absolute inset-0 bg-black/15" />

        {isPlaying ? (
          <Pause className="size-3.5 text-white relative" fill="#ffffff" />
        ) : (
          <Play className="size-3.5 text-white relative" fill="#ffffff" />
        )}
      </button>
      <div className="flex flex-col gap-1.5">
        <h4 className="text-sm font-medium">{voice.name}</h4>
        <div className="flex gap-1.5 flex-wrap">
          {Object.entries(voice.labels).map(([key, value]) => (
            <span
              key={voice.name + key}
              className="text-[10px] text-muted-foreground bg-neutral-100 rounded-md px-1"
            >
              {value
                .split(/[_-]/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[8px] mt-1">
          <span className="min-w-5">{formatTime(currentTime)}</span>
          <div className="w-full h-8 rounded-md flex items-center waveform-container">
            <div
              ref={waveformRef}
              className="w-full relative"
              onClick={handleWaveformClick}
            />
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <Checkbox
        className="absolute right-2 top-2 bg-white data-[state=checked]:bg-blue-500 data-[state=checked]:text-primary-foreground rounded-sm border-neutral-300 data-[state=checked]:border-blue-500"
        checked={selectedVoice?.voice_id === voice.voice_id}
      />
    </motion.div>
  );
};

const VoiceFilter = ({
  placeholder,
  options,
  value,
  onValueChange,
}: {
  placeholder: string;
  options: { label: string; value: string }[];
  value: string;
  onValueChange: (value: string) => void;
}) => {
  return (
    <div>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          size="sm"
          className="gap-3 text-xs border transition-shadow text-neutral-700 focus:ring-neutral-300/50 text-nowrap px-1.5"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-xs"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const MeshGradient: React.FC<{ className?: string }> = ({ className }) => {
  const generateRandomColor = () =>
    `hsl(${Math.random() * 360}, ${70 + Math.random() * 30}%, ${
      60 + Math.random() * 20
    }%)`;

  const points = useMemo(() => {
    return Array.from({ length: 3 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: generateRandomColor(),
    }));
  }, [generateRandomColor]); // Added generateRandomColor to dependencies

  return (
    <svg
      className={cn("absolute inset-0 w-full h-full", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <g filter="url(#blur)">
        {points.map((point, index) => (
          <circle
            key={index}
            cx={`${point.x}%`}
            cy={`${point.y}%`}
            r="40%"
            fill={point.color}
            opacity="0.7"
          />
        ))}
      </g>
    </svg>
  );
};

export default VoiceSelector;
