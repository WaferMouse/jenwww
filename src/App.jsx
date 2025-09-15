import "./App.css";
import ItemEntry from './Component/ItemEntry/ItemEntry.jsx';

function App() {
  return (
    <body>
      <main>
        <div className="App">
          <header className="App-header">
            <div id="profile-title">
              <h1>
                Jenbles on the internet
              </h1>
            </div>
          </header>
          <p>
            <div
              id="links-container"
              style={{
                display: "grid",
                "grid-template-columns": "auto auto"
              }}
            >
              <div
                className="section-header"
              >
                <h3 id="header-277898266">
                  The Socials
                </h3>
              </div>
              <ItemEntry
                url="https://bsky.app/profile/jenbles.bsky.social"
                thumbimg="c355230a-fa75-4f9b-990c-20162dfc92da_bafkreihzww3c4uk46ig27suvkak5ypodiozl77tpnzmlevvj4oxvpuyqhe-jpeg.jpeg"
                content="I am bad at bluesky"
              />
              <div
                className="section-header"
              >
                <h3 id="header-277898270">
                  TTRPG Projects
                </h3>
              </div>
              <ItemEntry
                url="https://talesfromtheoasis.com/"
                thumbimg="dQdNguWHSUiDztzRLttk_LogoV2Square3k_n5ua5g_1200x628.jpg"
                content="Listen to me play an unhinged Medtech in our Cyberpunk RED Radio Play, Tales from the Oasis"
              />
              <ItemEntry
                url="https://www.omeninvestigations.com/"
                thumbimg="4d2d79d1-082e-41e4-8a23-e538aa3b1428_OMEN-Logo-Art-1200x628.jpeg"
                content="Or play an out-of-her-depths manager in FATE Condensed on O.M.E.N. Investigations"
              />
              <ItemEntry
                url="https://creators.spotify.com/pod/show/cybertopiaap"
                thumbimg="question-mark_2753.png"
                content="Or play Maurice, a half human, half diner in Cybertopia"
              />
              <div
                className="section-header"
              >
                <h3 id="header-277898324">
                  Making Sounds
                </h3>
              </div>
              <ItemEntry
                url=""
                thumbimg="C2EfrZBTGAOlNTiAyNgE_avatars-000647867463-y4dfdb-t500x500.jpg"
                content="Listen to me beep some boops"
              />
              <ItemEntry
                url="https://www.youtube.com/@Jenbles"
                thumbimg="aa7cdd7a-0fc2-4d15-b726-ff8d1dd6da96_AIdro-mEyznHCmA8ox9CnI1BHDKR90h--DJIypNwFipLj22Hk9o-s900-c-k-c0x00ffffff-no-rj.jpeg"
                content="Beep the boops with a picture sometimes"
              />
              <ItemEntry
                url="https://jenbles.itch.io/"
                thumbimg="question-mark_2753.png"
                content="Beep the boops but as composition jams"
              />
              <ItemEntry
                url="https://soundcloud.com/thisstylishcrime"
                thumbimg="ro7uEGoRA2QWxk1gDP1Q_avatars-WZnay2ueRBV9ojbz-oCNvpA-t500x500.jpg"
                content="Listen to This Stylish Crime make me better at beeping some boops"
              />
            </div>
          </p>
        </div>
      </main>
      <footer>
        Contact: <a href="mailto:jen@jenblesaudio.zone">jen@jenblesaudio.zone</a>
      </footer>
    </body>
  );
}

export default App;
