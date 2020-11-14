import React from 'react';
import Logo from '../assets/images/logo.png';
import selfie from '../assets/images/xinjin.jpeg';
import linkedin from '../assets/images/linkedin.png';

export const Profile0DataSource = {
  wrapper: {
    className: 'home-page-wrapper Profile-wrapper khbi3cxvitr-editor_css',
  },
  OverPack: { playScale: 0.3, className: 'home-page Profile' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'Profile-banner-user-elem',
        titleWrapper: {
          className: 'Profile-content-wrapper khbhh39wjo-editor_css',
          children: [
            {
              name: 'image',
              children: <img src={selfie} alt="img"></img>,
              className: 'Profile-image',
            },
            {
              name: 'title',
              children: (
                <span>
                  <span>
                    <h3>Xin Jin</h3>
                  </span>
                </span>
              ),
              className: 'Profile-h1',
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>Software Engineer</p>
                              <p>
                                An enthusiastic, innovative, and goal-oriented
                                emerging professional<br />
                              </p>
                              <p>
                                Email: jinxin2457@gmail.com
                              </p>
                              <p>Phone: 9492942762</p>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'Profile-content khbi5o2euan-editor_css',
            },
            {
              name: 'image',
              className: 'Profile-logo',
              children:
              <a href="https://www.linkedin.com/in/xin-jin-12645513b/"><img src={linkedin} alt="img"></img></a>,
            },
          ],
        },
      },
    ],
  },
};
export const Header0DataSource = {
  wrapper: { className: 'header3 home-page-wrapper khbi3zsq5o-editor_css' },
  page: { className: 'home-page khbinowuyta-editor_css' },
  logo: {
    className: 'header3-logo khbiormmq5m-editor_css',
    children:
      'https://gw.alipayobjects.com/zos/basement_prod/b30cdc2a-d91c-4c78-be9c-7c63b308d4b3.svg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#Education_0',
          children: [
            {
              children: (
                <span>
                  <p>Education</p>
                </span>
              ),
              name: 'text',
            },
          ],
        }
        
      },
      {
        name: 'item~khbi41zjth',
        className: 'header3-item',
        children: {
          href: '#Skills_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Skills</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: '#Work_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Working Experience</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: '#Project_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>Project Experience</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: '#Honor_0',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Honors</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Education0DataSource = {
  wrapper: {
    className: 'home-page-wrapper education-wrapper khbhit7hpi8-editor_css',
  },
  page: { className: 'home-page education khbhdhmpw5-editor_css' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Education</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline khbhhmooykr-editor_css',
    children: [
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper khbhluvo33p-editor_css' },
          textWrapper: { className: 'text-wrapper khbhdejyyl-editor_css' },
          img: {
            className: 'block-img',
            children:
              'https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name khbht62yuqh-editor_css',
            children: '姓名',
          },
          post: {
            className: 'block-post khbht445oq-editor_css',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: 'block-time khbixmu8ijb-editor_css',
            children: (
              <span>
                <p>09.2018 - 05.2020</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <h3>New York University</h3>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content khbixeeu8ge-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            <span>Master of Computer Science</span>
                            <br />
                          </p>
                          <p>GPA 3.6</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper khbhvdzbq3q-editor_css' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://vignette.wikia.nocookie.net/pathinfo/images/6/65/Uci_logo.jpg/revision/latest?cb=20110131235619',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name khbhv9top7g-editor_css',
            children: '姓名',
          },
          post: {
            className: 'block-post khbhveqqnt-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time khbj47j9w6d-editor_css',
            children: (
              <span>
                <p>09.2014 - 12.2017</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <h3>University of California, Irvine</h3>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content khbj40pfifi-editor_css',
            children: (
              <span>
                <span>
                  <p>B.S of Computer Science</p>
                  <p>GPA 3.57</p>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Skills0DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6 khbib86zvuo-editor_css' },
  textWrapper: {
    className: 'content6-text khbikifz2g-editor_css',
    xs: 24,
    md: 10,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Skills</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  img: {
    children:
      'http://temsconsulting.com/wp-content/uploads/2015/07/programming-languages1.png',
    className: 'content6-img khbiac6fajp-editor_css',
    xs: 24,
    md: 14,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <h3>Programming Languages</h3>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <p>JavaScript ES6 | Java | Python | C# | HTML5 | CSS3</p>
                      <p>
                        <br />
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <h3>Tools &amp; Frameworks</h3>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <span>
                                <span>
                                  <span>
                                    <p>
                                      <span>
                                        React | Redux | Bootstrap | Unity|
                                        Node.js | AWS | jQuery |&nbsp;
                                      </span>
                                      <span>
                                        AJAX | Spring | Django | MySQL | NoSQL |
                                        SEO | MVC
                                      </span>
                                    </p>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: {
          className: 'content6-title',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <h3>Development Management</h3>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        content: {
          className: 'content6-content',
          children: (
            <span>
              <span>
                <p>Git | Agile | Jira</p>
              </span>
            </span>
          ),
        },
      },
    ],
  },
};
export const Work0DataSource = {
  wrapper: {
    className: 'home-page-wrapper content3-wrapper khbkq60tnjc-editor_css',
  },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Working Experience</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block khbkrjskr2-editor_css',
        md: null,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: Logo,
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title khbkt8lwtxo-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            Albedo Inc&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Jan 2018 – Present
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content khbkqghz32f-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          <i>Full Stack Software Engineer</i>
                        </p>
                        <p>
                          <b>
                            <br />
                          </b>
                        </p>
                        <p>
                          Developed a web-based application that can
                          auto-generate the optimal design of solar photovoltaic
                          system on rooftop to promote solar projects and sales.
                        </p>
                        <p>
                          • Reduced the process for creating complex 3D models
                          of buildings with flat or pitched roof from manual
                          work to only a few mouse clicks. Improved efficiency
                          and user experience by implementing 3D modeling tools
                          using React, Redux and Cesium.js.
                        </p>
                        <p>
                          • Developed the front-end diagram generator and
                          serverless RESTful APIs through NodeJS, KonvaJS, and
                          AWS, users are able to effectively visualize and
                          manage the electrical design diagram of the solar
                          system.
                        </p>
                        <p>
                          • Optimized solar panel arrays computation efficiency
                          to 98%, and maximized the system energy yield through
                          effective visualization of the effects of solar
                          seasonal irradiance and shading on rooftop surfaces
                          and local weather data analysis.
                        </p>
                        <p>
                          • Implemented a blog system that enabled the company
                          to publish and manage news and tutorial that help
                          customers quickly understand and operate the design
                          software using Ant-Design, React, NodeJS and Django.
                        </p>
                        <p>
                          • Held concurrent responsibility for discussing
                          requirements with users, maintaining databases,
                          designing user interface, resolving technical issues,
                          and ensuring compliance with quality standards while
                          working collaboratively with the team in a fast-paced,
                          multi-project environment. Served as subject matter
                          expert for providing technical solution to
                          auto-generate CAD files based on the design data of
                          the solar system.
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Project0DataSource = {
  wrapper: { className: 'home-page-wrapper Project-wrapper' },
  page: { className: 'home-page Project' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'Project-title-wrapper',
    children: [
      {
        name: 'title',
        className: 'Project-title-h1',
        children: (
          <span>
            <p>Project Experience</p>
          </span>
        ),
      },
    ],
  },
  blockWrapper: {
    className: 'Project-block-wrapper',
    gutter: 24,
    children: [
      {
        md: 24,
        xs: 24,
        name: 'block0',
        className: 'Project-block',
        children: {
          className: 'Project-block-group khbpa7d8n6o-editor_css',
          children: [
            {
              name: 'title',
              className: 'Project-block-title',
              children: (
                <span>
                  <span>
                    <p>
                    WeatherTracking Web App
                    </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'Project-block-content khbpo8r2acf-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <a href="https://github.com/Alexinjin/LocalWeatherApp-Full-Stack">
                          https://github.com/Alexinjin/LocalWeatherApp-Full-Stack
                        </a>
                        <p>
                          Developed a single
                          page web application that allows user to get hourly forecast weather data based on the given location by using React and Spring.
                        </p>
                        <br />
                        <p>
                          • Implemented the Front-end UI that allows users to get the past 7 days of local weather data and show temperature of a specific location. 
                        </p>
                        <br />
                        <p>
                          • Developed the backend that retrieve the real weather data from OpenWeather API by using Spring Boot. 
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 24,
        xs: 24,
        name: 'block0',
        className: 'Project-block',
        children: {
          className: 'Project-block-group khbpa7d8n6o-editor_css',
          children: [
            {
              name: 'title',
              className: 'Project-block-title',
              children: (
                <span>
                  <span>
                    <p>
                      Dining Concierge Chatbot<br />
                    </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'Project-block-content khbpo8r2acf-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          Developed a serverless, microservice-driven single
                          page web application that sends the restaurant
                          suggestions based on users’ preferences provided to
                          the chatbot through conversations using React, Redux,
                          AWS and Django
                        </p>
                        <br />
                        <p>
                          • Enabled users to write messages and get responses
                          back hosting by building and deploying the front-end
                          of the&nbsp;<span>
                            application and setting up User Authentication
                            Management using AWS Cognito.
                          </span>
                        </p>
                        <p>
                          • Implemented the chatbot using Amazon Lex and created
                          RESTful APIs to perform the chat operations using AWS.
                        </p>
                        <p>
                          • Offered high-related restaurants recommendations to
                          users through building a suggestions module decoupled
                          from the&nbsp;<span>
                            chatbot using the preferences information.
                          </span>
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 24,
        xs: 24,
        name: 'block~khbp2p3vwe',
        className: 'Project-block',
        children: {
          className: 'Project-block-group khbpaow69g-editor_css',
          children: [
            {
              name: 'title',
              className: 'Project-block-title',
              children: (
                <span>
                  <span>
                    <p>
                      Smart Door Authentication System<br />
                    </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'Project-block-content khbpqbww92j-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          Designed and developed a smart, database-driven
                          security system to control access to the electronic
                          door locker using the identity details of visitors
                          interacting with the security system using React and
                          AWS.
                        </p>
                        <br />
                        <p>
                          • Designed the UI/UX that captures the video stream
                          and enables users to manage the system and visitors
                          databases.
                        </p>
                        <p>
                          • Implemented the face detection feature using AWS
                          Rekognition and Kinesis to capture and identify
                          registered/unknown visitors, then notify houseowner
                          through emails or SMS with snapshots of unknown
                          visitors.
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        md: 24,
        xs: 24,
        name: 'block~khbp2qxoxw',
        className: 'Project-block',
        children: {
          className: 'Project-block-group khbparq57ab-editor_css',
          children: [
            {
              name: 'title',
              className: 'Project-block-title',
              children: (
                <span>
                  <span>
                    <p>
                      Easy Exam<br />
                    </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'Project-block-content khbpq8i0l9-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>
                              Designed and implemented a single page web
                              application that help professors and students take
                              online exams easily using Javascript, Python, React, Node.js and AWS
                            </p>
                            <p>
                              • Implemented "Professor Access" page that allows the professor to upload exam questions and students' photos so that only selected students are allowed to take the exam by using React and Bootstrap.
                            </p>
                            <p>
                              • Developed "Student Access" page that take the selfie of students and decide if the student is qualified to take exams by using Node.js and AWS Rekognition. Qualified students are able to take the exam and submit the answers.
                            </p>
                    
                            <p>
                              • Designed RESTful APIs that handles different requests including uploading exams questions & answers, students' selfies, recognizing stduents' faces by using Node.js and AWS API Gateway, S3, Lambda and Rekognition.
                            </p>
                            <p>
                              • EasyExam is able to auto-grade the exam and will send the grade to both the student and the professor through AWS SES, DynamoDB and Lambda.
                            </p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Honor0DataSource = {
  wrapper: {
    className: 'home-page-wrapper Honor-wrapper khbm43k2y06-editor_css',
  },
  page: { className: 'home-page Honor' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Honors &amp; Awards</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'Honor-image khbm6jj7mcb-editor_css',
              children:
                'https://image.slidesharecdn.com/ucinvcteamformationdatabaseairtablev2-180126194521/95/uci-new-venture-competition-team-formation-database-1-638.jpg?cb=1516996113',
            },
            {
              name: 'title',
              className: 'Honor-title khbm26twfwp-editor_css',
              children: (
                <span>
                  <span>
                    <p>
                      New Venture Competition<br />
                    </p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'Honor-content khbmilftyc-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>
                              <span>
                                The UCI New Venture Competition offers UCI
                                students, staff members, and researchers the
                                opportunity to form a team, launch a startup and
                                potentially fund their business idea all within
                                five months. In 2018, a total of 97 teams
                                participated in this competition. A total of 54
                                teams headed into the final round of the 2018
                                New Venture Competition&nbsp; presented by the
                                Beall Center for Innovation and Entrepreneurship
                                and UCI Applied Innovation. My team won the
                                second prize with $5000 as bonus.
                              </span>
                              <br />
                            </p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'Honor-image khbm65dtxa8-editor_css',
              children:
                'https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no/photo.jpg',
            },
            {
              name: 'title',
              className: 'Honor-title khbmm8gcwth-editor_css',
              children: (
                <span>
                  <p>Scholarship</p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'Honor-content khbmlmcf31t-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        Ruth Hitchcock Memorial Scholarship from New York
                        University<br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'Honor-image khbm69suvo-editor_css',
              children: 'https://cxcy.xmu.edu.cn/images/banner.jpg',
            },
            {
              name: 'title',
              className: 'Honor-title khbm3x7fq9r-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        Internet Innovation &amp; Entrepreneurship Competition<br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'Honor-content khbmnua32o7-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        It's the world’s largest innovation and
                        entrepreneurship competition aiming to promote the
                        creativity of the University students and postgraduates.
                        Over 640,000 projects were submitted at the initial
                        stage of the contest this year.&nbsp;My Team received
                        the Second Prize at the “The 4th Chinese College
                        Students ‘Internet Plus’ Innovation and Entrepreneurship
                        Competition in Xiamen in Oct 2018”. <br />
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Contact0DataSource = {
  OverPack: {
    className: 'home-page-wrapper Contact-wrapper khbk5zp9zub-editor_css',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>Contact Me</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <p>Email: jinxin2457@gmail.com</p>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <p>Phone: 9492942762</p>
          </span>
        ),
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: {
      a: {
        className: 'button khbk5dybu8r-editor_css',
        href: '#',
        children: (
          <span>
            <p>Back to Top</p>
          </span>
        ),
      },
    },
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [],
  },
  links: {
    className: 'links',
    children: [],
  },
};
