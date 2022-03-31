import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SkullContainer from "./SkullContainer";

function App() {
  return (
    <div className="app pt-4">
      <Container>
        <Navbar />
        <Row className="mb-5">
          <Col xs={6}>
            <div className="pinkZone px-5 py-3">
              <p>Crowdfunding reimagined</p>
              <h1>
                Own a piece <br />
                of your favourite project
              </h1>
              <p className="fs-4">
                Get Patron staking NFTs, that <br />
                – certify your contribution <br />
                – open doors to members-only section of project <br />– earn
                yield
              </p>
            </div>
            <div className="video"></div>
          </Col>
        </Row>
        <Row className=" mb-5">
          <Col className="pt-5" xs="auto">
            <SkullContainer
              primaryTitle="#WAGMI"
              secondaryTitle="Stake 100 UST"
              text="NFT with 625 Voting Right on WAGMIchest"
              bgImageURL="images/skullOne.png"
              width={750}
              height={750}
              breakTitle
            />
          </Col>
          <Col xs="auto">
            <Row>
              <Col className="mb-3">
                <SkullContainer
                  primaryTitle="#CORE"
                  secondaryTitle="500 UST"
                  text="(unstake 100 UST in 6 months)"
                  bgImageURL="images/skullTwo.png"
                  width={450}
                  height={450}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <SkullContainer
                  primaryTitle="#WHIS"
                  secondaryTitle="2,500 UST"
                  text="NFT with 3750 Voting Right on
              WAGMIchest & Content"
                  bgImageURL="images/skullTwo.png"
                  width={450}
                  height={330}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="greenZone">
          <Col className="px-5">
            <p className="opacity-50 mt-2">
              Sale ends April 9, 2022 at 4:46pm CET
            </p>
            <hr />
            <h3 className="my-3">About Danku Zone</h3>
            <p className="opacity-50">
              Danku Zone is a web series from a crypto content creator @danku_r.
              The series takes a detailed look at protocols, yield farms and
              investment strategies in the Terra ecosystem, as well as Solana,
              Harmony, Thorchain and others.
            </p>
            <Row>
              <Col xs="auto">
                <h1>“</h1>
              </Col>
              <Col>
                <p className="opacity-50">
                  <i>
                    I strongly believe that DeFi improves every aspect of our
                    life. We can align our goals for the greater good. Moreover,
                    sharing and collaboration have always been humanities
                    greatest success elements.
                  </i>
                </p>
                <p className="opacity-50">
                  <i>
                    Thus, the more we share, the more we can achieve. I want to
                    thrive for open, independent & free access to information to
                    get the best of us. However, how can I stay independent as
                    creator while supporting my audience?
                  </i>
                </p>
                <p className="opacity-50">
                  <i>
                    With a loss-less investment where you, my audience, and I
                    align our goals. No ads, no shill, only WAGMI. Welcome to
                    danku_zone with principle protected investments by PIXY
                    Protocol.
                  </i>
                </p>
              </Col>
            </Row>
            <h3 className="text-end mb-4">- danku_r</h3>
            <p className="opacity-50">
              The yield from your NFT purchase goes to fund 6 months of the
              Danku Zone and will establish the WAGMI DAO. At the end of the
              lock up period each NFT is redeemable for its face value. However,
              there is another choice. Purchasers can also opt to keep their NFT
              which has voting rights in WAGMI DAO. There are three tiers of
              NFTs available, each with different voting allocations. The
              minting period will run 48 hours from launch.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2 className="text-center">How it Works</h2>
          </Col>
        </Row>
        <Row className="justify-content-center my-5 howItWorks">
          <Col xs={3}>
            <h1>1</h1>
            <p>Purchase an NFT</p>
          </Col>
          <Col xs={3}>
            <h1>2</h1>
            <p>Your tokens are locked in vault and accrue interest</p>
          </Col>
          <Col xs={3}>
            <h1>3</h1>
            <p>
              The project is financed and the face value of your NFT can be
              redeemed
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
