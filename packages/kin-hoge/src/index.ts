import { Button } from "@kintone/kintone-ui-component/esm/js";

kintone.events.on('app.record.index.show', (event: any) => {
  const header = kintone.app.getHeaderMenuSpaceElement();
  const button = new Button({ text: "hoge", type: "normal" });
  header.appendChild(button.render());
  return event;
});