"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GitHubActivity({ username }: { username: string }) {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <GitHubCalendar
        username={username}
        colorScheme="light"
        blockSize={10}
        blockMargin={2}
        fontSize={12}
      />
    </div>
  );
}
