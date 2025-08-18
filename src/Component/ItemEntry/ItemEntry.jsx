export default function ItemEntry(props) {
  return (
    <div data-testid="LinkThumbnail" type="CLASSIC" class="thumby">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        class="buttony"
        height="auto"
      >
        <img
          data-testid="LinkThumbnailImage"
          src={props.thumbimg}
          class="otherthumby"
        />
        <p>{props.content}</p>
      </a>
    </div>
  );
}
