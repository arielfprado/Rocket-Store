import * as Styles from "./styles";
import { ITabTitleProps } from "./types";

export function TabTitle(props: ITabTitleProps) {
  return (
    <Styles.TabTitle>
      <li>
        <button onClick={() => props.setSelectedTab(props.index)}>
          {props.title}
        </button>
      </li>
    </Styles.TabTitle>
  );
}
