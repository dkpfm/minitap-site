export default [
  { code: "'mt-play'", desc: "when controller starts playing" },
  { code: "'mt-stop'", desc: "when controller stops playing" },
  { code: "'mt-beat'", desc: "at the beggining of each beat" },
  {
    isPayload: true,
    code: "{ currentBeat }",
    desc: "absolute current beat since last play",
  },
  { code: "'mt-sequence'", desc: "at the beggining of each sequence" },
  { code: "'mt-channel-on'", desc: " when a note starts at a channel" },
  {
    isPayload: true,
    code: "{ channel }",
    desc: " channel index (0-7)",
  },
  { code: "'mt-channel-off'", desc: " when a note ends at a channel" },
  {
    isPayload: true,
    code: "{ channel }",
    desc: " channel index (0-7)",
  },
  {
    code: "'mt-channel${i}-on'",
    desc: " when a note starts at a channel,<br/>${i} is the channel index (0-7)",
  },
  {
    code: "'mt-channel${i}-off'",
    desc: " when a note ends at a channel,<br/>${i} is the channel index (0-7)",
  },
];
