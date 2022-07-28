import styles from './Home.module.css'
import logo from '../../assets/logomark-1@2x.png'
import keyline from '../../assets/keyline.svg'
import union from '../../assets/union.svg'
import subtract from '../../assets/subtract.svg'
import path from '../../assets/path.svg'
import subtract1 from '../../assets/subtract1.svg'
import oval from '../../assets/oval.svg'
import welcomeImg from '../../assets/character02-1@2x.png'
import dashboard from '../../assets/ellipse-214.svg'
import vector from '../../assets/vector.svg'
import vector1 from '../../assets/vector1.svg'
import bnb from '../../assets/bnb.svg'
import btc from '../../assets/btc.svg'
import eth from '../../assets/eth.svg'
import ellipse from '../../assets/ellipse-234.svg'
import graph from '../../assets/img1@2x.png'
import illustration from '../../assets/illustration@2x.png'





const Home = () => {
    return (
        <div className={styles.responsiveHomeDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.frameDiv2}>
              <button className={styles.logomark1Button}>
                <img
                  className={styles.logomark1Icon}
                  alt=""
                  src={logo}
                />
              </button>
              <button className={styles.dashboardButton}>
                <img className={styles.keylineIcon} alt="" src={keyline} />
                <img
                  className={styles.ellipseIcon}
                  alt=""
                  src={dashboard}
                />
                <img className={styles.unionIcon} alt="" src={union} />
              </button>
              <button className={styles.dashboardButton}>
                <img className={styles.keylineIcon} alt="" src={keyline} />
                <div className={styles.rectangleDiv} />
                <div className={styles.rectangleDiv1} />
                <div className={styles.rectangleDiv2} />
                <div className={styles.rectangleDiv3} />
              </button>
              <button className={styles.dashboardButton}>
                <img className={styles.keylineIcon} alt="" src={keyline} />
                <div className={styles.rectangleCopyDiv} />
                <div className={styles.rectangleDiv4} />
                <img className={styles.subtractIcon} alt="" src={subtract} />
              </button>
              <button className={styles.dashboardButton}>
                <img className={styles.keylineIcon} alt="" src={keyline} />
                <img className={styles.pathIcon} alt="" src={path} />
                <img
                  className={styles.subtractIcon1}
                  alt=""
                  src={subtract1}
                />
              </button>
              <button className={styles.dashboardButton}>
                <img className={styles.unionIcon1} alt="" src={union} />
                <img className={styles.ovalIcon} alt="" src={oval} />
              </button>
            </div>
          </div>
          <div className={styles.frameDiv3}>
            <div className={styles.frameDiv4}>
              <div className={styles.frameDiv5}>
                <div className={styles.welcomeRamDiv}>Welcome Ram!</div>
                <div className={styles.enhanceYourFinancialLifeWi}>
                  Enhance your financial life with Maximum Protocol
                </div>
                <button className={styles.frameButton}>
                  <div>
                    {/* <img className={styles.vectorIcon} alt="" /> */}
                    <div className={styles.watchNowDiv}>Watch Now</div>
                  </div>
                </button>
              </div>
              <img
                className={styles.character021Icon}
                alt=""
                src={welcomeImg}
              />
            </div>
            <div className={styles.indexCardDiv}>
              <div className={styles.frameDiv7}>
                <div className={styles.maxPicksDiv}>Max Picks</div>
                <div className={styles.viewAllDiv}>View All</div>
              </div>
              <div className={styles.frameDiv8}>
                <div className={styles.frameDiv9}>
                  <div className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.welcomeRamDiv}>ETH</div>
                          <div className={styles.etheriumDiv}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv}>
                        <div className={styles.div}>$5324</div>
                        <div className={styles.percentageDiv}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div1}>22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.welcomeRamDiv}>ETH</div>
                          <div className={styles.etheriumDiv}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv}>
                        <div className={styles.div}>$5324</div>
                        <div className={styles.percentageDiv}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div1}>22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.eTHDiv2}>ETH</div>
                          <div className={styles.etheriumDiv2}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv2}>
                        <div className={styles.div4}>$5324</div>
                        <div className={styles.percentageDiv2}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div5}>22%</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.eTHDiv2}>ETH</div>
                          <div className={styles.etheriumDiv2}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv2}>
                        <div className={styles.div4}>$5324</div>
                        <div className={styles.percentageDiv2}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div5}>22%</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className={styles.frameDiv9}>
                  <div className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.welcomeRamDiv}>ETH</div>
                          <div className={styles.etheriumDiv}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv}>
                        <div className={styles.div}>$5324</div>
                        <div className={styles.percentageDiv}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div1}>22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.welcomeRamDiv}>ETH</div>
                          <div className={styles.etheriumDiv}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv}>
                        <div className={styles.div}>$5324</div>
                        <div className={styles.percentageDiv}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div1}>22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.welcomeRamDiv}>ETH</div>
                          <div className={styles.etheriumDiv}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv}>
                        <div className={styles.div}>$5324</div>
                        <div className={styles.percentageDiv}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div1}>22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameButton1}>
                    <div className={styles.coinDiv}>
                      <div className={styles.frameDiv11}>
                        <div className={styles.iCONDiv}>
                          <img
                            className={styles.vectorIcon1}
                            alt=""
                            src={vector}
                          />
                        </div>
                        <div className={styles.nameDiv}>
                          <div className={styles.welcomeRamDiv}>ETH</div>
                          <div className={styles.etheriumDiv}>Etherium</div>
                        </div>
                      </div>
                      <div className={styles.priceDiv}>
                        <div className={styles.div}>$5324</div>
                        <div className={styles.percentageDiv}>
                          <img
                            className={styles.vectorIcon2}
                            alt=""
                            src={vector1}
                          />
                          <div className={styles.div1}>22%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv23}>
              <div className={styles.frameDiv24}>
                <div className={styles.indexesDiv}>Indexes</div>
                <div className={styles.viewAllDiv}>View All</div>
              </div>
              <div className={styles.frameDiv25}>
                <div className={styles.indexMainComponent}>
                  <div className={styles.indexCardDiv}>
                    <div className={styles.bgDiv}>
                      <div className={styles.titleAndGraph}>
                        <b className={styles.gamingIndexB}>
                          <p className={styles.gamingP}>Gaming</p>
                          <p className={styles.indexP}>Index</p>
                        </b>
                        <textarea className={styles.imgTextarea} />
                      </div>
                    </div>
                    <div className={styles.bottomDiv}>
                      <div className={styles.coinsDiv}>
                        <img className={styles.bnbIcon} alt="" src={bnb} />
                        <img className={styles.bnbIcon} alt="" src={eth} />
                        <img className={styles.bnbIcon} alt="" src={btc} />
                        <div className={styles.moreDiv}>
                          <img
                            className={styles.ellipseIcon1}
                            alt=""
                            src={ellipse}
                          />
                          <div className={styles.div16}>{`+2 `}</div>
                          <div className={styles.moreDiv1}>more</div>
                        </div>
                      </div>
                      <button className={styles.buttonView}>
                        <button className={styles.buttonStroke}>
                          <div className={styles.viewIndexDiv}>VIEW</div>
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.indexMainComponent}>
                  <div className={styles.indexCardDiv}>
                    <div className={styles.bgDiv1}>
                      <div className={styles.titleAndGraph}>
                        <b className={styles.gamingIndexB}>
                          <p className={styles.gamingP}>Gaming</p>
                          <p className={styles.indexP}>Index</p>
                        </b>
                        <img
                          className={styles.imgIcon}
                          alt=""
                          src={graph}
                        />
                      </div>
                    </div>
                    <div className={styles.bottomDiv}>
                      <div className={styles.coinsDiv}>
                        <img className={styles.bnbIcon} alt="" src={bnb} />
                        <img className={styles.bnbIcon} alt="" src={eth} />
                        <img className={styles.bnbIcon} alt="" src={btc} />
                        <div className={styles.moreDiv}>
                          <img
                            className={styles.ellipseIcon1}
                            alt=""
                            src={ellipse}
                          />
                          <div className={styles.div16}>{`+2 `}</div>
                          <div className={styles.moreDiv1}>more</div>
                        </div>
                      </div>
                      <button className={styles.buttonView}>
                        <button className={styles.buttonStroke}>
                          <div className={styles.viewIndexDiv}>VIEW</div>
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
                <form className={styles.indexMainComponent}>
                  <div className={styles.indexCardDiv}>
                    <div className={styles.bgDiv2}>
                      <div className={styles.titleAndGraph}>
                        <b className={styles.gamingIndexB2}>
                          <p className={styles.gamingP}>Gaming</p>
                          <p className={styles.indexP}>Index</p>
                        </b>
                        <img
                          className={styles.imgIcon}
                          alt=""
                          src={graph}
                        />
                      </div>
                    </div>
                    <div className={styles.bottomDiv2}>
                      <div className={styles.coinsDiv}>
                      <img className={styles.bnbIcon} alt="" src={bnb} />
                        <img className={styles.bnbIcon} alt="" src={eth} />
                        <img className={styles.bnbIcon} alt="" src={btc} />
                        <div className={styles.moreDiv}>
                          <img
                            className={styles.ellipseIcon1}
                            alt=""
                            src={ellipse}
                          />
                          <div className={styles.div18}>{`+2 `}</div>
                          <div className={styles.moreDiv5}>more</div>
                        </div>
                      </div>
                      <button className={styles.buttonView}>
                        <button className={styles.buttonStroke}>
                          <div className={styles.viewIndexDiv}>VIEW</div>
                        </button>
                      </button>
                    </div>
                  </div>
                </form>
                <form className={styles.indexMainComponent}>
                  <div className={styles.indexCardDiv}>
                    <div className={styles.bgDiv3}>
                      <div className={styles.titleAndGraph}>
                        <b className={styles.gamingIndexB2}>
                          <p className={styles.gamingP}>Gaming</p>
                          <p className={styles.indexP}>Index</p>
                        </b>
                        <img
                          className={styles.imgIcon}
                          alt=""
                          src={graph}
                        />
                      </div>
                    </div>
                    <div className={styles.bottomDiv2}>
                      <div className={styles.coinsDiv}>
                      <img className={styles.bnbIcon} alt="" src={bnb} />
                        <img className={styles.bnbIcon} alt="" src={eth} />
                        <img className={styles.bnbIcon} alt="" src={btc} />
                        <div className={styles.moreDiv}>
                          <img
                            className={styles.ellipseIcon1}
                            alt=""
                            src={ellipse}
                          />
                          <div className={styles.div18}>{`+2 `}</div>
                          <div className={styles.moreDiv5}>more</div>
                        </div>
                      </div>
                      <button className={styles.buttonView}>
                        <button className={styles.buttonStroke}>
                          <div className={styles.viewIndexDiv}>VIEW</div>
                        </button>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv26}>
            <div className={styles.frameDiv27}>
              <div className={styles.textIntro}>
                <p className={styles.aiPoweredFinancialManager}>
                  Ai Powered financial manager
                </p>
                <h1 className={styles.personalisedPortfolioForMax}>
                  <p className={styles.gamingP}>Personalised portfolio</p>
                  <p className={styles.indexP}>for Maximum returns</p>
                </h1>
              </div>
              <img
                className={styles.illustrationIcon}
                alt=""
                src={illustration}
              />
              <button className={styles.frameButton3}>
                <div className={styles.startNowDiv}>Start Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;

