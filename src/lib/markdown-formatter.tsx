type ParsedItem = {
  type: "list" | "paragraph";
  content?: string;
  items?: string[];
};

const MarkdownFormatter: React.FC<{ message: string }> = ({ message }) => {
  const parseMessage = (text: string): ParsedItem[] => {
    const lines = text.split("\n");
    const parsedLines: ParsedItem[] = [];

    let currentList: string[] | null = null;
    for (const line of lines) {
      if (line.startsWith("\t-")) {
        if (currentList === null) {
          currentList = [];
        }
        currentList.push(line.replace("\t-", ""));
      } else {
        if (currentList !== null) {
          parsedLines.push({ type: "list", items: currentList });
          currentList = null;
        }
        if (line.startsWith("\t")) {
          parsedLines.push({
            type: "paragraph",
            content: line.replace("\t", ""),
          });
        } else {
          parsedLines.push({ type: "paragraph", content: line });
        }
      }
    }

    if (currentList !== null) {
      parsedLines.push({ type: "list", items: currentList });
    }

    return parsedLines;
  };

  const formatParsedMessage = (parsedMessage: ParsedItem[]) => {
    return parsedMessage.map((item, index) => {
      if (item.type === "list") {
        return (
          <ul key={index}>
            {item.items?.map((listItem, listIndex) => (
              <li key={listIndex}>{listItem}</li>
            ))}
          </ul>
        );
      } else {
        return <p key={index}>{item.content}</p>;
      }
    });
  };

  const parsedMessage = parseMessage(message);
  return <div>{formatParsedMessage(parsedMessage)}</div>;
};

export default MarkdownFormatter;
