type MarqueeProps = { text: string; reverse?: boolean; tone?: 'light' | 'dark' }

export function Marquee({ text, reverse = false, tone = 'light' }: MarqueeProps) {
  const content = Array.from({ length: 6 }, (_, index) => <span key={index}>{text}<i>✦</i></span>)
  return <div className={`editorial-marquee ${reverse ? 'reverse' : ''} ${tone}`} aria-hidden="true"><div>{content}{content}</div></div>
}
