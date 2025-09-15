export default function ItemEntry(props) {
  return (
    <>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        class="buttony"
        height="auto"
        style={{
          "grid-column-start": "1"
        }}
      >
        <img
          data-testid="LinkThumbnailImage"
          src={props.thumbimg}
          class="otherthumby"
          style={{
            width: "50%",
          }}
        />
      </a>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        class="buttony"
        height="auto"
        style={{
          "grid-column-start": "2",
          "text-align": "left"
        }}
      >
        <p>
          {props.content}
        </p>
      </a>
    </>
  );
}
