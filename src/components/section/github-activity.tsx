"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubActivity({ username }: { username: string }) {
  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username={username}
        colorScheme="light"
        blockSize={12}
        blockMargin={4}
        fontSize={12}
      />
    </div>
  );
}
