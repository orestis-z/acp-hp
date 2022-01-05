<template>
  <div>
    <div class="underlay" />
    <div class="home">
      <div class="wrapper">
        <component
          v-if="particlesBgComp"
          :is="particlesBgComp"
          v-bind="bgProps"
        ></component>
        <div class="avatar">
          <img :src="$withBase(data.avatar)" alt="" />
        </div>
        <div class="card">
          <div class="bio">
            <div class="head">
              <span>
                {{ data.head }}
              </span>
            </div>
            <div class="description">
              <Content />
            </div>
          </div>

          <!-- <div class="interests">
          {{ data.interests }}
        </div> -->

          <div class="actions">
            <div v-for="item in data.actions">
              <a
                :href="item.link"
                class="button"
                :target="item.link.startsWith('/') ? '' : '_blank'"
              >
                {{ item.text }}
              </a>
            </div>
          </div>
        </div>

        <div class="footer" v-if="data.footer"></div>
      </div>
    </div>

    <div class="section">
      <div class="subsection">
        <div class="paragraph">
          <div class="title">WELCOME TO THE</div>
          <div class="title">ANTI CRYPTOPUNKS FAMILY</div>
          <div class="body">
            ACPs is a collection of 10,000 Anti CryptoPunk NFTs — unique digital
            collectibles living on the Polygon network. They are a mirror
            project of the original CryptoPunks from LarvaLabs. ACPs is the
            first project that is going to be placed in the
            <em>Anti</em>-Metaverse a.k.a. <em>AntiVerse</em>.
          </div>
        </div>
        <div class="image-container">
          <div>
            <img src="/6594.png" />
            <img src="/3477.png" />
          </div>
          <div>
            <img src="/7804.png" />
            <img src="/9280.png" />
          </div>
        </div>
      </div>
      <div id="buy" />
      <div class="subsection">
        <div class="green center">
          <div class="buynow title nobreak pr">BUY AN ACP</div>
          <div class="buynow pr">
            The initial airdrop has finished. To get your Anti CryptoPunk, check
            out the collection on OpenSea.
          </div>
          <div class="buynow button">
            <a
              href="https://opensea.io/collection/anti-cryptopunks"
              target="_blank"
              ><div class="title">BUY AN ANTI CRYPTOPUNK ON OPENSEA</div></a
            >
          </div>
        </div>
      </div>
      <div class="divider" />
      <div class="subsection">
        <div class="paragraph">
          <div class="title">WELCOME TO THE FAMILY</div>
          <div class="body">
            When you buy an Anti CryptoPunk, you're not simply buying an
            inverted CryptoPunk or a provably-rare piece of art. You are gaining
            membership access to a family whose benefits and offerings will
            increase over time. Your Anti CryptoPunk can serve as your digital
            identity, and open digital doors for you.
          </div>
          <div class="large">
            <div class="image-container-info">
              <div class="info-container">
                <img class="info" src="/info/2.png" />
                10,000 provably-rare Anti CryptoPunk tokens
              </div>
              <div class="info-container">
                <img class="info" src="/info/1.png" />
                Commercial usage rights given to the holder over their NFT
              </div>
              <div class="info-container">
                <img class="info" src="/info/3.png" />
                Early whitelist access for anti-project airdrops
              </div>
              <div class="info-container">
                <img class="info" src="/info/4.png" />
                Part-ownership of the antiverse
              </div>
            </div>
          </div>
          <div class="small">
            <div class="image-container-info">
              <div class="image-container-helper">
                <div class="info-container">
                  <img class="info" src="/info/2.png" />
                  10,000 provably-rare Anti CryptoPunk tokens
                </div>
                <div class="info-container">
                  <img class="info" src="/info/1.png" />
                  Commercial usage rights given to the holder over their NFT
                </div>
              </div>
              <div class="image-container-helper">
                <div class="info-container">
                  <img class="info" src="/info/3.png" />
                  Early whitelist access for anti-project airdrops
                </div>
                <div class="info-container">
                  <img class="info" src="/info/4.png" />
                  Part-ownership of the antiverse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider" />
      <div class="subsection">
        <div class="paragraph">
          <div class="title">THE ANTIVERSE</div>
          <div class="body">
            Owning an Anti CryptoPunk means you will be a part-owner of the
            <em>AntiVerse</em>. <br />In the antiverse, communities can create
            anti-projects such as anti-NFTs that have inspirations but are
            different than their mirror projects.<br /><br />
            Our anti-members will have a huge impact on the antiverse's
            direction: one vote per NFT owned.<br />
            Holders will also get access to our exclusive channels, and be the
            first to hear about new anti-projects and giveaways.
          </div>
        </div>
        <div class="image-container">
          <img class="large" src="/animated-promo.gif" />
        </div>
      </div>
      <div class="divider" />
      <div id="roadmap" />
      <div class="subsection">
        <div class="paragraph">
          <div class="title">ANTI ROADMAP</div>
          <div class="body">
            We are in this for the long haul. <br /><br />
            We have set up some goalposts for ourselves: <br />
            <ul>
              <li class="done">Mining and early adaptors
                <em class="info">completed when all 10k ACPs minted</em>
              </li>
              <li>First community growth stage
                <em class="info"
                  >completed when 500 users on both discord and twitter, and 0.1
                  ETH volume traded</em
                >
              </li>
              <li>Second growth stage: Social media marketing, influencers & paid
                promotion
                <em class="info"
                  >completed when 5k users on discord and twitter and 1 ETH
                  volume traded</em
                >
              </li>
              <li>Solidify market position as a high-demand NFT
                <em class="info">completed when 100 ETH volume traded</em>
              </li>
            </ul>
            <br />Here are our sneak-peeks for the future: <br />
            <ul>
              <li>Invest the profits into the creation of the
                <em>AntiVerse</em> and whitelist all ACP holders
              </li>
              <li>Build partnerships and add more anti-projects to the AntiVerse
              </li>
            </ul>
          </div>
        </div>
        <div class="image-container no-min-width">
          <img class="largevar" src="/shirt1magic.png" />
        </div>
      </div>
      <div class="divider" />
      <div id="team" />
      <div class="subsection">
        <div class="paragraph">
          <div class="title">THE ANTI TEAM</div>
          <div class="body">
            Anti CryptoPunks was created by two friends who set out to make some
            dope punks, test their skills, and try to build something
            (ridiculous).<br /><br />
            <span class="green-font">4nt1m4tt3r.</span>
            <em>BUSINESS AND ROBOTS. GENERATES AI ART FOR FUN.</em>
            <br /><br /><span class="green-font">4nt1pr0t0n.</span>

            <em>MARKETING AND SALES. RAIDS REDDIT FOR A LIVING.</em><br />
            <div class="joinus small" />
            <div class="joinus large">
              <br />
              <span class="smaller"
                >We're looking for more people to join our team!<br />
                Interested?
                <em
                  ><a href="https://discord.gg/WvGnnXQPV5" target="_blank"
                    >JOIN OUR DISCORD</a
                  ></em
                >
                and apply!</span
              >
            </div>
          </div>
        </div>
        <div class="image-container narrow">
          <div class="pad">
            <img src="/3477.png" />
          </div>
          <div>
            <img class="pad" src="/4015.png" />
          </div>
        </div>
        <div class="joinus small">
          <span class="smaller"
            >We're looking for more people to join our team!<br />
            Interested?
            <em
              ><a href="https://discord.gg/WvGnnXQPV5" target="_blank"
                >JOIN OUR DISCORD</a
              ></em
            >
            and apply!</span
          >
        </div>
      </div>
      <div class="divider strong" />
      <div class="subsection wide">
        <div class="social-icons">
          <a href="https://discord.gg/WvGnnXQPV5" target="_blank">
            <img src="/discord.svg" />
          </a>

          <a
            href="https://opensea.io/collection/anti-cryptopunks"
            target="_blank"
          >
            <img src="/opensea.svg" />
          </a>

          <a href="https://twitter.com/anti_cryptopunk" target="_blank">
            <img src="/twitter.svg" />
          </a>
        </div>
        <div class="subscribe">
          <div class="title smaller"><em>GET ON THE LIST</em></div>
          <mailchimp-subscribe
            url="https://anticryptopunks.us20.list-manage.com/subscribe/post-json"
            user-id="568e0b445e51871f094b00bae"
            list-id="920b21ff83"
            @error="onError"
            @success="onSuccess"
          >
            <template v-slot="{ subscribe, setEmail, error, success, loading }">
              <form @submit.prevent="subscribe">
                <fieldset>
                  <input
                    type="email"
                    @input="setEmail($event.target.value)"
                    placeholder="Email"
                  />
                  <button type="submit">Subscribe</button>
                </fieldset>
                <div v-if="error">
                  <em>{{ error }}</em>
                </div>
                <div v-if="success"><em>Subscribed, yay!</em></div>
                <div v-if="loading"><em>Loading…</em></div>
              </form>
            </template>
          </mailchimp-subscribe>
        </div>
        <small><a href="/terms/">Terms & Conditions</a></small>
        <small>© 2022 AntiMatter Labs LLC</small>
      </div>
    </div>
    <div class="endline" />
  </div>
</template>

<script>
import MailchimpSubscribe from "vue-mailchimp-subscribe";

export default {
  components: {
    MailchimpSubscribe,
  },
  data() {
    return {
      particlesBgComp: null,
    };
  },
  computed: {
    bgProps() {
      if (this.particlesBgComp) {
        return { bg: true, type: "lines" };
      }
    },
    data() {
      return this.$page.frontmatter;
    },
  },
  mounted() {
    import("particles-bg-vue").then((module) => {
      this.particlesBgComp = module.ParticlesBg;
    });

    const headerlinks = document.getElementsByClassName("nav-link external");
    for (let item of headerlinks) {
      if (~item.textContent.indexOf("Discord")) {
        item.setAttribute("rel", "noopener");
      }
    }
  },
};
</script>

<style lang="stylus">
@import './styles/config.styl';
@import '../override.styl';

html {
  scroll-behavior: smooth;
}

body {
  .home {
    max-width: 100%;
    min-height: calc(100vh - 6rem);
    display: flex;
    padding: 2.4rem 2rem 0;
  }

  form {
    margin-top: 0.4em;
    margin-bottom: 0.5em;

    fieldset {
      font-size: 1em;
      padding: 0em;
      font-family: sans-serif;
      font-family: Rubik, sans-serif;
      font-size: 16px;
      border-width: 2px;
      border-color: $accentColor;
      border-style: solid;
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        max-width: 350px;
        width: 40vw;
        font-size: inherit;
        height: 1.6em;
        outline: none;
        border: none;
        background-color: transparent;
        // border-width: 2px;
        // border-color: $accentColor;
        // border-style: solid;
        padding: 0.5em;
        -moz-box-sizing: content-box; /* or `border-box` */
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        color: rgba(255, 255, 255, 0.9);
        font-weight: bold;

        &::placeholder {
          color: inherit;
          font-weight: normal;
        }
      }

      button {
        cursor: pointer;
        font-size: inherit;
        font-family: Nourd;
        background-color: $accentColor;
        color: black;
        // -webkit-transition-duration: 0.4s; /* Safari */
        // transition-duration: 0.4s;
        padding: 0.7em;
        padding-left: 2em;
        padding-right: 2em;
        border: none;
        -moz-box-sizing: content-box; /* or `border-box` */
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
      }
    }

    div {
      font-size: 14px;
      font-family: Rubik, sans-serif;
    }
  }

  .subscribe {
    padding: 0.3em;
    padding-bottom: 1em;
  }

  .underlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 200vh;
    background-color: black;
    z-index: -1;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
    z-index: 10;
    margin-bottom: 0.7em;
  }

  .mooform {
    width: 100%;

    .content:not(.custom) > *:first-child {
      margin-top: 0;
    }

    .content:not(.custom) {
      padding-top: 0em;
    }
  }

  ul {
    list-style: none; /* Remove default bullets */
    font-size: 14px;

    .info {
      color: #5184C0;
      text-decoration-color: #5184C0;
    }
  }

  li {
    margin-top: 1em;
  }

  ul li::before {
    content: '\25CF'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
    color: #88EB34; /* Change the color */
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }

  .divider {
    height: 1px;
    width: 100%;
    max-width: 900px;
    background-color: rgba(255, 255, 255, 0.3);
    margin: auto;
    margin-top: 4em;
    margin-bottom: -2em;

    &.strong {
      height: 2px;
      background-color: rgba(255, 255, 255, 0.8);
      max-width: 1200px;
    }
  }

  .endline {
    height: 0.8em;
    background-color: #88EB34;
  }

  .smaller {
    font-size: 14px;
  }

  .section {
    background-color: black;
    color: rgba(255, 255, 255, 0.9);
    padding-bottom: 2em;
    line-height: 140%;

    .center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .green-font {
      color: #88EB34;
    }

    .green {
      background-color: #88EB34;
      padding: 1em;
      border-radius: 5px;

      @media (max-width: $MQMobile) {
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }

    .subsection {
      margin: auto;
      padding-top: 6rem;
      max-width: 900px;
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 3em;
      padding-right: 3em;

      @media (max-width: $MQMobile) {
        flex-direction: column;
        align-items: center;
      }

      @media (max-width: $MQMobileNarrow) {
        padding-left: 1em;
        padding-right: 1em;
      }

      &.extra-section {
        margin-top: -4em;
      }

      &.wide {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.5em;

        img {
          height: 40px;
          width: 40px;
          margin-left: 12px;
          margin-right: 12px;
        }
      }

      .nobreak {
        white-space: nowrap;
      }

      .pr {
        padding-right: 2em;

        @media (max-width: $MQMobile) {
          padding: 0;
        }
      }

      .pr:not(.title) {
        @media (max-width: $MQMobile) {
          padding-top: 1em;
          padding-bottom: 1em;
        }
      }

      .buynow {
        color: black;

        .title {
          padding: 1em;
          background-color: black;
          line-height: 130%;
          -webkit-transition-duration: 0.4s; /* Safari */
          color: white;

          &:hover {
            background-color: white;
            color: black;
          }

          a {
            color: inherit;
          }
        }
      }

      .title {
        font-size: 22px;
        font-family: Nourd;
        font-weight: 800;
        padding-bottom: 0.15em;

        &.smaller {
          font-size: 16px;
        }
      }

      .paragraph {
        flex-direction: column;
        text-align: justify;

        .title {
          text-align: left;
        }

        .body {
          padding-top: 0.6em;

          .done {
            text-decoration: line-through;
          }
        }
      }

      .image-container-info {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-around;
        padding-top: 2.5em;

        @media (max-width: $MQMobile) {
          flex-direction: column;
          padding-top: 0;
        }

        .image-container-helper {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: space-around;
        }

        .info-container {
          @media (max-width: $MQMobile) {
            padding-top: 2.5em;
            padding-left: 0.2em;
            padding-right: 0.2em;
          }

          max-width: 200px;
          font-size: 14px;
          line-height: 140%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .info {
          margin-bottom: 1em;
          display: block;
          max-width: 230px;
          max-height: 128px;
          width: auto;
          height: auto;
        }
      }

      .image-container {
        min-width: 302px;
        padding-left: 6em;

        @media (max-width: $MQMobile) {
          padding: 0;
          margin-top: 1em;

          &.no-min-width {
            min-width: 0;
          }
        }

        &.narrow {
          min-width: 151px;

          @media (max-width: $MQMobile) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .pad {
              margin-left: 0.2em;
              margin-right: 0.2em;
            }
          }
        }

        img {
          width: 140px;
          height: 140px;
          border-radius: 5px;
          margin: 4px;

          @media (max-width: $MQMobile) {
            padding: 0;
            width: calc(50vw - 1.8vw - 3em);
            height: calc(50vw - 1.8vw - 3em);
            border-radius: 2vw;
            margin: 0.6vw;
          }

          @media (max-width: $MQMobileNarrow) {
            width: calc(50vw - 2vw - 1em);
            height: calc(50vw - 2vw - 1em);
          }
        }

        .large {
          max-width: 512px;
          max-height: 534px;
          width: 302px;
          height: 315px;
          margin: 0;
          display: block;

          @media (max-width: $MQMobile) {
            padding: 0;
            margin-top: 0.6vw;
            width: calc(100vw - 6em);
            height: calc(104vw - 6em);
            border-radius: 2vw;
          }

          @media (max-width: $MQMobileNarrow) {
            width: calc(100vw - 2em);
            height: calc(104vw - 2em);
          }
        }

        .largevar {
          width: 302px;
          height: 364px;
          margin: 0;
          margin-top: 7em;
          border-radius: 0px;

          @media (max-width: $MQMobile) {
            padding: 0;
            margin-top: 0.6vw;
            width: calc(83vw - 6em);
            height: calc(100vw - 6em);
            border-radius: 2vw;
            margin-bottom: -0.6em;
          }

          @media (max-width: $MQMobileNarrow) {
            width: calc(100vw - 2em);
            height: calc(121vw - 2em);
          }
        }
      }
    }
  }

  @media (max-width: $MQMobileNarrow) {
    .home {
      padding-left: 0;
      padding-right: 0;
      padding: 1rem 0.5rem;
    }
  }
}

.large {
  @media (max-width: $MQMobile) {
    display: none;
  }
}

.small {
  display: none;

  @media (max-width: $MQMobile) {
    display: block;

    &.joinus {
      margin-top: 1em;
    }
  }
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    position: relative;
    z-index: 1;

    img {
      display: block;
      width: 100%;
      height: auto;
      max-width: 150px;
      border-radius: 500rem;
    }
  }

  .card {
    max-width: 600px;
    width: 100%;
    position: relative;
    top: -75px;
    padding-top: 75px;
    padding-bottom: 4px;
    margin-left: auto;
    margin-right: auto;
    background: black;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    text-align: center;
    color: rgba(255, 255, 255, 0.9);

    .bio {
      padding: 1em;

      .head {
        font-weight: 700;
        font-size: 1.3em;
        padding-bottom: 0.2em;
        // font-family: 'Nourd';
        // font-weight: 800;
        // font-style: normal;
      }

      .info {
        padding-top: 0.5rem;
        font-size: 1em;
        color: rgba(255, 255, 255, 0.9);
      }

      .description {
        text-align: center;

        p {
          padding: 0.8em 0.5em 0;
          line-height: 150%;
          -webkit-margin-before: 0em;
          -webkit-margin-after: 0em;

          a {
            font-weight: normal;
          }
        }
      }
    }

    .interests {
      padding: 1em 1.5em;
      font-size: 18px;
      font-weight: 700;
      text-align: left;
      color: #20312a;
      text-decoration: underline;
    }

    .socials {
      display: flex;
      flex-direction: row;
      // align-items: center
      justify-content: center;
      flex-wrap: wrap;

      img {
        width: 32px;
        margin: 1em;
        cursor: pointer;
      }
    }

    .actions {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;

      // padding 1em
      .button {
        background-color: $btnBgColor;
        border: none;
        border-radius: 20px;
        color: white;
        padding: 0.5em 1em;
        margin: 1em 0.5em;
        font-size: 1rem;
        font-family: inherit;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
        cursor: pointer;
        color: white;
        font-family: Nourd;

        &:hover {
          background-color: $btnHvColor;
          color: black;
        }
      }
    }
  }

  .footer {
    padding: 1rem;
    // border-top 1px solid lighten(#bdc3c7, 50%)
    font-weight: 200;
    font-size: 1rem;
    text-align: center;
    color: lighten($footColor, 25%);
    margin-top: auto;
  }
}
</style>
