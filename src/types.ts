export type Voice = {
  voice_id: string;
  name: string;
  labels: {
    accent?: string;
    descriptive?: string;
    description?: string;
    age?: "young" | "middle_aged" | "old";
    gender: "male" | "female";
    use_case?: string;
  };
  preview_url: string;
};
