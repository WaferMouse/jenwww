export default function ItemEntry(props) {
  return (
    <div class="relative h-full" data-id="277897720">
      <div
        class="-top[92px] invisible relative block"
        id="277897720"
      ></div>
      <div
        data-testid="StyledContainer"
        data-linktype="CLASSIC"
        class="sc-bdfBwQ sc-dmlrTW fcHYTr imRFLm group"
        type="CLASSIC"
      >
        <a
          href={props.url}
          target="_blank"
          rel="noopener"
          data-testid="LinkButton"
          class="buttony"
          height="auto"
        >
          <div class="h-full w-full">
            <div
              data-testid="LinkThumbnail"
              type="CLASSIC"
              class="thumby"
            >
              <img
                data-testid="LinkThumbnailImage"
                src={props.thumbimg}
                class="otherthumby"
              />
            </div>
            <p class="sc-hKgILt sc-hiSbYr cxwgnw eHEGrJ">
              {props.content}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}