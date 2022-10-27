import { useState } from "react";
import { TabTitle } from "../TabTitle";
import { ITabsProps } from "./types";
import * as Styles from "./styles";

export function Tabs(props: ITabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Styles.Tabs>
      <div className="tabs-wrapper">
        <ul>
          {props.children.map((item, index) => (
            <TabTitle
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
        <hr />
        <p>{props.children[selectedTab]}</p>
      </div>
    </Styles.Tabs>
  );
}
