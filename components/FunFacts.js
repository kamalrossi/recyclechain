 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
 import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FUNFACTS_DATA = [
  {
    count: "47",
   title: "Suburb"
  },
  {
    count: "63",
    title: "Cities"
  },
  {
    count: "9000",
    title: "Users"
  },
  {
    count: "1200",
    title: "Smart-devices"
  }
];

const FunFacts = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className="border-top pt-120 pb-80">
      <Container>
        <Row>
          {FUNFACTS_DATA.map((funfact, index) => (
            <Col md={3} sm={6} key={`funfact-post-${index}`}>
              <div className="single-counter text-center">
                <span className="counter">
                  <VisibilitySensor
                    onChange={onVisibilityChange}
                    offset={{ top: 10 }}
                    delayedCall
                  >
                    <CountUp end={counter.startCounter ? funfact.count : 0} />
                  </VisibilitySensor>
                </span>
                <p>Our Growth</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFacts;
