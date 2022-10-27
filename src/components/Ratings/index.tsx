import { IRatingsProps } from "./types";

export function Ratings(props: IRatingsProps) {
  return (
    <>
      <h4>{props.text}</h4>
      <h5>{props.score}</h5>
    </>
  );
}
