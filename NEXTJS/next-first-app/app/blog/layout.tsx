export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div
        style={{
          backgroundColor: "blue",
          height: "50",
          color: "white",
        }}
      >
        블로깅 공용 레이아웃 영역
      </div>
      {children}
    </div>
  );
}
