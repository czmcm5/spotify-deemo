export function getDaysAgo(date: string | null): string {
  if (date === null) return "-";

  const inputDate = new Date(date);
  const now = new Date();

  const diffTime = now.getTime() - inputDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays > 0 ? `${diffDays}일 전` : "오늘";
}

export function formatMinSec(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedSeconds = seconds.toString().padStart(2, "0");

  return `${minutes}:${paddedSeconds}`;
}
