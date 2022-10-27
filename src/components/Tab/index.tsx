import { ITabProps } from "./types";

import * as Styles from "./styles";

export function Tab(props: ITabProps) {
  return <Styles.TabWrapper>{props.children}</Styles.TabWrapper>;
}
