import "./App.css";
import ItemEntry from './Component/ItemEntry/ItemEntry.jsx';
import SectionHeader from './Component/SectionHeader/SectionHeader.jsx';

function App() {
  return (
    <body>
      <main>
        <div className="App">
          <header className="App-header">
            <h1>Jenbles on the internet</h1>
          </header>
          <div className="main">
            <nav className="nav">
              <ul className="nav-list">
                <li><a href="#sound-design">Sound Design</a></li>
                <li><a href="#podcasts">Podcasts</a></li>
                <li><a href="#music">Music</a></li>
              </ul>
            </nav>
            <div
              id="links-container"
              style={{
                display: "grid",
                "grid-template-columns": "auto auto"
              }}
            >
              <SectionHeader><a id="sound-design" className="target-element"/>Sound Design</SectionHeader>
              <ItemEntry
                url="https://oxyoxspring.itch.io/polyarmory"
                thumbimg="polyarmory.gif"
              >
                Polyarmory: High Calibre Love. The world's only fully-loaded conspiracy theorist gun-nut dating simulation. We'll bang, okay?
              </ItemEntry>
              <ItemEntry
                url="https://www.omeninvestigations.com/"
                thumbimg="4d2d79d1-082e-41e4-8a23-e538aa3b1428_OMEN-Logo-Art-1200x628.jpeg"
              >
                I play an out-of-her-depths manager in FATE Condensed on O.M.E.N. Investigations
              </ItemEntry>
              <SectionHeader><a id="podcasts" className="target-element"/>Podcasts</SectionHeader>
              <ItemEntry
                url="https://talesfromtheoasis.com/"
                thumbimg="dQdNguWHSUiDztzRLttk_LogoV2Square3k_n5ua5g_1200x628.jpg"
              >
                Listen to me play an unhinged Medtech in our Cyberpunk RED Radio Play, Tales from the Oasis
              </ItemEntry>
              <ItemEntry
                url="https://www.omeninvestigations.com/"
                thumbimg="4d2d79d1-082e-41e4-8a23-e538aa3b1428_OMEN-Logo-Art-1200x628.jpeg"
              >
                Or play an out-of-her-depths manager in FATE Condensed on O.M.E.N. Investigations
              </ItemEntry>
              <ItemEntry
                url="https://creators.spotify.com/pod/show/cybertopiaap"
                thumbimg="question-mark_2753.png"
              >
                Or play Maurice, a half human, half diner in Cybertopia
              </ItemEntry>
              <SectionHeader><a id="music" className="target-element"/>Music</SectionHeader>
              <ItemEntry
                url="https://jenbles.itch.io/escapschism"
                thumbimg="escapschism.jpg"
              >
                Escapschism
              </ItemEntry>
              <ItemEntry
                url="https://open.spotify.com/artist/0JPOvBYFw3Qo5UIII7Miri"
                thumbimg="question-mark_2753.png"
              >
                Jenbles on Spotify
              </ItemEntry>
              <ItemEntry
                url="https://soundcloud.com/jenbles"
                thumbimg="C2EfrZBTGAOlNTiAyNgE_avatars-000647867463-y4dfdb-t500x500.jpg"
              >
                Jenbles on Soundcloud
              </ItemEntry>
              <ItemEntry
                url="https://www.youtube.com/@Jenbles"
                thumbimg="aa7cdd7a-0fc2-4d15-b726-ff8d1dd6da96_AIdro-mEyznHCmA8ox9CnI1BHDKR90h--DJIypNwFipLj22Hk9o-s900-c-k-c0x00ffffff-no-rj.jpeg"
              >
                Jenbles on YouTube
              </ItemEntry>
              <ItemEntry
                url="https://jenbles.itch.io/"
                thumbimg="question-mark_2753.png"
              >
                Jenbles on itch.io
              </ItemEntry>
              <ItemEntry
                url="https://soundcloud.com/thisstylishcrime"
                thumbimg="ro7uEGoRA2QWxk1gDP1Q_avatars-WZnay2ueRBV9ojbz-oCNvpA-t500x500.jpg"
              >
                This Stylish Crime on Soundcloud
              </ItemEntry>
            </div>
          </div>
        </div>
      </main>
      <footer>
        Contact: <a href="mailto:jen@jenblesaudio.zone">jen@jenblesaudio.zone</a>
      </footer>
    </body>
  );
}

export default App;
