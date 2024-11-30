/**
 * 날짜 문자열과 포맷을 받아 지정된 형식으로 변환합니다.
 * @param dateString - 변환할 날짜 (예: "2024-11-30")
 * @param format - 출력 형식 (예: "YYYY-MM-DD", "MM/DD/YYYY", "DD.MM.YYYY")
 * @returns 지정된 형식의 날짜 문자열
 */
export function formatDate(dateString: string, format: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = format
    .replace("YYYY", year.toString())
    .replace("MM", month)
    .replace("DD", day)
    .replace("HH", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);

  return formattedDate;
}
