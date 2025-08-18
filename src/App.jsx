import "./App.css";
import ItemEntry from './Component/ItemEntry/ItemEntry.jsx';

function App() {
  return (
    <body>
      <main>
        <div className="App">
          <header className="App-header">
            <div id="profile-picture">
              <img
                src="https://ugc.production.linktr.ee/JsYP5DFLTZayLOktMME0_94yy34iLHF26V1cu?io=true&amp;size=avatar-v3_0"
                alt=""
                role="presentation"
                crossorigin="anonymous"
              />
            </div>
            <div id="profile-title">
              <h1>
                Jenbles on the internet
              </h1>
            </div>
            <div id="profile-description">
              <h2>
                Can't fit all these links in a pinned tweet anymore.
              </h2>
            </div>
          </header>
          <p>
            <div id="links-container">
              <div>
                <h3 id="header-277898266">
                  The Socials
                </h3>
              </div>
              <div>
                <ItemEntry
                  url="https://bsky.app/profile/jenbles.bsky.social"
                  thumbimg="https://ugc.production.linktr.ee/c355230a-fa75-4f9b-990c-20162dfc92da_bafkreihzww3c4uk46ig27suvkak5ypodiozl77tpnzmlevvj4oxvpuyqhe-jpeg.jpeg?io=true&size=thumbnail-stack-v1_0"
                  content="I am bad at bluesky"
                />
              </div>
              <div>
                <div class="mt-4">
                  <h3 id="header-277898270">
                    TTRPG Projects
                  </h3>
                </div>
              </div>
              <div>
                <ItemEntry
                  url="https://talesfromtheoasis.com/"
                  thumbimg="https://ugc.production.linktr.ee/dQdNguWHSUiDztzRLttk_LogoV2Square3k_n5ua5g_1200x628.jpg?io=true&amp;size=thumbnail-stack-v1_0"
                  content="Listen to me play an unhinged Medtech in our Cyberpunk RED Radio Play, Tales from the Oasis"
                />
              </div>
              <div>
                <ItemEntry
                  url="https://www.omeninvestigations.com/"
                  thumbimg="https://ugc.production.linktr.ee/4d2d79d1-082e-41e4-8a23-e538aa3b1428_OMEN-Logo-Art-1200x628.jpeg?io=true&amp;size=thumbnail-stack-v1_0"
                  content="Or play an out-of-her-depths manager in FATE Condensed on O.M.E.N. Investigations"
                />
              </div>
              <div>
                <ItemEntry
                  url="https://creators.spotify.com/pod/show/cybertopiaap"
                  thumbimg=""
                  content="Or play Maurice, a half human, half diner in Cybertopia"
                />
              </div>
              <div>
                <div class="mt-4">
                  <h3 id="header-277898324">
                    Making Sounds
                  </h3>
                </div>
              </div>
              <div>
                <ItemEntry
                  url=""
                  thumbimg="https://ugc.production.linktr.ee/C2EfrZBTGAOlNTiAyNgE_avatars-000647867463-y4dfdb-t500x500.jpg?io=true&amp;size=thumbnail-stack-v1_0"
                  content="Listen to me beep some boops"
                />
              </div>
              <div>
                <ItemEntry
                  url="https://www.youtube.com/@Jenbles"
                  thumbimg="https://ugc.production.linktr.ee/aa7cdd7a-0fc2-4d15-b726-ff8d1dd6da96_AIdro-mEyznHCmA8ox9CnI1BHDKR90h--DJIypNwFipLj22Hk9o-s900-c-k-c0x00ffffff-no-rj.jpeg?io=true&amp;size=thumbnail-stack-v1_0"
                  content="Beep the boops with a picture sometimes"
                />
              </div>
              <div>
                <ItemEntry
                  url="https://jenbles.itch.io/"
                  thumbimg=""
                  content="Beep the boops but as composition jams"
                />
              </div>
              <div>
                <ItemEntry
                  url="https://soundcloud.com/thisstylishcrime"
                  thumbimg="https://ugc.production.linktr.ee/ro7uEGoRA2QWxk1gDP1Q_avatars-WZnay2ueRBV9ojbz-oCNvpA-t500x500.jpg?io=true&amp;size=thumbnail-stack-v1_0"
                  content="Listen to This Stylish Crime make me better at beeping some boops"
                />
              </div>
            </div>
          </p>
        </div>
      </main>
    </body>
  );
}

export default App;
