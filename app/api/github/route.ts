import { NextResponse } from "next/server";

export const revalidate = 3600; // ISR cache: revalidate every hour

export async function GET() {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    // Optionally use a token for higher rate limits (5000/hr vs 60/hr)
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      "https://api.github.com/users/zainarshad16/repos?per_page=100&sort=pushed&direction=desc",
      { headers, next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const repos = await res.json();

    // Filter out forks, sort by pushed_at, take top 6
    const filtered = repos
      .filter((r: { fork: boolean }) => !r.fork)
      .slice(0, 6)
      .map(
        (r: {
          id: number;
          name: string;
          description: string | null;
          html_url: string;
          language: string | null;
          stargazers_count: number;
          forks_count: number;
          pushed_at: string;
          topics: string[];
        }) => ({
          id: r.id,
          name: r.name,
          description: r.description,
          url: r.html_url,
          language: r.language,
          stars: r.stargazers_count,
          forks: r.forks_count,
          pushedAt: r.pushed_at,
          topics: r.topics ?? [],
        })
      );

    return NextResponse.json(filtered, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("GitHub API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch GitHub repositories" },
      { status: 500 }
    );
  }
}
