/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./src/globals.js
const scope = typeof global === 'undefined' ? window : global;

// Polyfill for withResolvers from
// https://github.com/ungap/with-resolvers/blob/main/index.js
Promise.withResolvers ||
  (Promise.withResolvers = function withResolvers() {
    var a,
      b,
      c = new this(function (resolve, reject) {
        a = resolve;
        b = reject;
      });
    return { resolve: a, reject: b, promise: c };
  });

scope.__DEV__ = "production" === 'development';
scope.__TEST__ = "production" === 'test';
scope.__PROD__ = "production" === 'production';

;// CONCATENATED MODULE: ./src/events/onBedrockSignInUser.js
function onBedrockSignInUser(e) {
  if (__DEV__) {
    console.log('Web.Zephr:event: onBedrockSignInUser', e);
  }

  const {
    detail: { signInUser },
  } = e;
  if (!signInUser) {
    console.error(
      'Web.Zephr:Error: onBedrockSignInUser event requires signInUser boolean to be explicitly passed.',
    );
  }

  if (signInUser === false) {
    return;
  }

  return window.dispatchEvent(new CustomEvent('onzephrunmountalloutcomes'));
}

window.addEventListener('onbedrocksigninuser', onBedrockSignInUser);

/* harmony default export */ const events_onBedrockSignInUser = ((/* unused pure expression or super */ null && (onBedrockSignInUser)));

;// CONCATENATED MODULE: ./src/events/onBedrockSignOutUser.js
function onBedrockSignOutUser(e) {
  if (__DEV__) {
    console.log('Web.Zephr:event: onBedrockSignOutUser', e);
  }

  const {
    detail: { signOutUser },
  } = e;
  if (!signOutUser) {
    console.error(
      'Web.Zephr:Error: onBedrockSignOutUser event requires signOutUser boolean to be explicitly passed.',
    );
  }

  if (signOutUser === false) {
    return;
  }

  return window.dispatchEvent(new CustomEvent('onzephrunmountalloutcomes'));
}

window.addEventListener('onbedrocksignoutuser', onBedrockSignOutUser);

/* harmony default export */ const events_onBedrockSignOutUser = ((/* unused pure expression or super */ null && (onBedrockSignOutUser)));

;// CONCATENATED MODULE: ./src/utils/getRootPageOrigin.js
/**
 * Retrieves the origin of the root page. If the current page is embedded as an iframe, it will return the referrer's origin (if available). Otherwise, it will return the current page's origin.
 *
 * @param {Window} [windowTop=window.top] - A reference to the current window's top object. Defaults to the global `window.top`.
 * @param {Window} [windowSelf=window.self] - A reference to the current window's self object. Defaults to the global `window.self`.
 * @returns {string} The origin of the root page, either from the referrer or the current page's location origin.
 *
 * @see {@link https://stackoverflow.com/a/7739035|StackOverflow reference}
 *
 * @example
 * // If the function is called inside an iframe with document.referrer as 'https://www.cnbc.com/'
 * getRootPageOrigin(); // returns 'https://www.cnbc.com'
 *
 * // If the function is called in the top window (not inside an iframe)
 * getRootPageOrigin(); // returns the current page's location origin (e.g., 'https://www.example.com')
 */
function getRootPageOrigin(windowTop = window.top, windowSelf = window.self) {
  // For iframes this is just the origin like https://www.cnbc.com
  // Browser drop the path and query string params
  // https://stackoverflow.com/a/7739035
  const isCurrentPageIframed = windowTop !== windowSelf;

  // Determine which origin controls the page content
  if (isCurrentPageIframed && document && document.referrer) {
    try {
      const { origin } = new URL(document.referrer);

      return origin;
    } catch (e) {
      console.error('Web.Zephr:Error:getRootPageOrigin', e);

      // TODO: is there a better return in an error state?
      return null;
    }
  }

  const { origin } = window.location;

  return origin;
}

/* harmony default export */ const utils_getRootPageOrigin = (getRootPageOrigin);

;// CONCATENATED MODULE: ./src/utils/getPostMessageTargetOrigin.js


function getPostMessageTargetOrigin() {
  const rootPageOrigin = utils_getRootPageOrigin();

  const safeDomainPattern = /cnbc\.com$/i;
  const isSafeTargetOrigin =
    rootPageOrigin.match(safeDomainPattern) ||
    rootPageOrigin === 'http://localhost:3000';

  // IMPORTANT: Only safe post message target origins should be returned
  if (!isSafeTargetOrigin) {
    return null;
  }

  return rootPageOrigin;
}

/* harmony default export */ const utils_getPostMessageTargetOrigin = (getPostMessageTargetOrigin);

;// CONCATENATED MODULE: ./src/utils/bubbleEventToParentPage.js


function bubbleEventToParentPage(e) {
  const { type, detail } = e;

  const message = {
    type,
    detail,
  };
  const targetOrigin = utils_getPostMessageTargetOrigin();

  window.parent.postMessage(message, targetOrigin);
}

/* harmony default export */ const utils_bubbleEventToParentPage = (bubbleEventToParentPage);

;// CONCATENATED MODULE: ./src/utils/isTrustedOrigin.secondLevelDomains.json
const isTrustedOrigin_secondLevelDomains_namespaceObject = ["cnbc"];
;// CONCATENATED MODULE: ./src/utils/isTrustedOrigin.js


function isTrustedOrigin(origin) {
  const shouldTrustOrigin =
    isTrustedOrigin_secondLevelDomains_namespaceObject.some((secondLevelDomain) => {
      const topLevelDomain = 'com'; // all of our domains are off of .com (e.g., cnbc.com, nbcnews.com, etc)
      const secondAndTopLevelDomainPattern = new RegExp(
        `${secondLevelDomain}\.${topLevelDomain}`,
        'i', // case insensitive
      );
      const shouldTrustOrigin = origin.match(secondAndTopLevelDomainPattern);

      return shouldTrustOrigin;
    }) || origin === 'http://localhost:3000';

  return shouldTrustOrigin;
}

/* harmony default export */ const utils_isTrustedOrigin = (isTrustedOrigin);

;// CONCATENATED MODULE: ./src/utils/isIframedPage.js
function isIframedPage() {
  const isIframed = window !== window.parent;

  return isIframed;
}

/* harmony default export */ const utils_isIframedPage = (isIframedPage);

;// CONCATENATED MODULE: ./src/utils/shouldBubbleEventToParentPage.js



function shouldBubbleEventToParentPage() {
  const isTrusted = utils_isTrustedOrigin(window.location.origin);
  if (!utils_isIframedPage() || !isTrusted) {
    return false;
  }

  return true;
}

/* harmony default export */ const utils_shouldBubbleEventToParentPage = (shouldBubbleEventToParentPage);

;// CONCATENATED MODULE: ./src/events/onZephrAnalyticsRuleOutcomeConversion.js



// Each environment fronted by Akamai ("pub" must be in the URL) proxies all /zephr/*
// traffic to that environments designated Zephr origin
const ZEPHR_ANALYTICS_TOP_PAGE_PROXY_PATH =
  '/zephr/public/rule-outcomes/v1/conversions';

async function onZephrAnalyticsRuleOutcomeConversion(e) {
  if (utils_shouldBubbleEventToParentPage()) {
    if (__DEV__) {
      console.log(
        'Web.Zephr:event:bubble: onZephrAnalyticsRuleOutcomeConversion',
      );
    }
    return utils_bubbleEventToParentPage(e);
  }

  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrAnalyticsRuleOutcomeConversion', e);
  }

  const { detail: { outcomeId, outcomeSlug, conversion } = {} } = e;
  if (!outcomeId || !outcomeSlug || !conversion) {
    console.error(
      'Web.Zephr:Error: onZephrAnalyticsRuleOutcomeConversion event requires a outcomeId, outcomeSlug, and conversion arguments. Received:',
      e,
    );
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      conversion,
      ruleId: outcomeId,
      outcomeId: outcomeSlug,
    }),
  };

  if (__DEV__) {
    // For local development mock Zephr analytics callback due to /zephr/* proxy setup
    // only being available in long lived environments (e.g., production, stg01, etc)
    console.info(
      `Web.Zephr:onZephrAnalyticsRuleOutcomeConversion:mock: fetch(${ZEPHR_ANALYTICS_TOP_PAGE_PROXY_PATH}, ${JSON.stringify(
        options,
        null,
        2,
      )})`,
    );
    return;
  }

  try {
    const request = fetch(ZEPHR_ANALYTICS_TOP_PAGE_PROXY_PATH, options);

    if (__TEST__) {
      // Return request for test assertions
      return request;
    }

    const response = await request;

    return response;
  } catch (e) {
    console.error(
      `Web.Zephr:error:onZephrAnalyticsRuleOutcomeConversion: tried to POST conversion data to ${ZEPHR_ANALYTICS_TOP_PAGE_PROXY_PATH}`,
      options,
      e,
    );
  }
}

window.addEventListener(
  'onzephranalyticsruleoutcomeconversion',
  onZephrAnalyticsRuleOutcomeConversion,
);

/* harmony default export */ const events_onZephrAnalyticsRuleOutcomeConversion = ((/* unused pure expression or super */ null && (onZephrAnalyticsRuleOutcomeConversion)));

;// CONCATENATED MODULE: ./src/events/onZephrOutcomeHistoryAppend.js



function onZephrOutcomeHistoryAppend(e) {
  try {
    if (utils_shouldBubbleEventToParentPage()) {
      if (__DEV__) {
        console.log('Web.Zephr:event:bubble: onZephrOutcomeHistoryAppend');
      }
      return utils_bubbleEventToParentPage(e);
    }

    if (__DEV__) {
      console.log('Web.Zephr:event: onZephrOutcomeHistoryAppend', e);
    }

    const {
      detail: { outcomeHistoryEntry },
    } = e;
    if (!outcomeHistoryEntry) {
      console.error(
        'Web.Zephr:Error: onZephrOutcomeHistoryAppend event requires an "outcomeHistoryEntry" argument.',
      );
    }

    const zephrOutcomeHistoryData = localStorage.getItem('zephrOutcomeHistory');
    const zephrOutcomeHistory = zephrOutcomeHistoryData
      ? JSON.parse(zephrOutcomeHistoryData)
      : [];

    zephrOutcomeHistory.push(outcomeHistoryEntry);

    localStorage.setItem(
      'zephrOutcomeHistory',
      JSON.stringify(zephrOutcomeHistory),
    );

    return zephrOutcomeHistory;
  } catch (e) {
    console.error('Web.Zephr:Error: onZephrOutcomeHistoryAppend', e);

    return e;
  }
}

window.addEventListener(
  'onzephroutcomehistoryappend',
  onZephrOutcomeHistoryAppend,
);

/* harmony default export */ const events_onZephrOutcomeHistoryAppend = ((/* unused pure expression or super */ null && (onZephrOutcomeHistoryAppend)));

;// CONCATENATED MODULE: ./src/events/onZephrClose.js



function onZephrClose(e) {
  if (utils_shouldBubbleEventToParentPage()) {
    if (__DEV__) {
      console.log('Web.Zephr:event:bubble: onZephrClose');
    }
    return utils_bubbleEventToParentPage(e);
  }

  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrClose', e);
  }

  const {
    detail: { selector },
  } = e;
  if (!selector) {
    console.error(
      'Web.Zephr:Error: onZephrClose event requires a selector to be passed.',
    );
  }

  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.error(
      `Web.Zephr:Error: onZephrClose event target element "${selector}" does not exist.`,
    );
    return;
  }

  return targetElement.remove();
}

window.addEventListener('onzephrclose', onZephrClose);

/* harmony default export */ const events_onZephrClose = ((/* unused pure expression or super */ null && (onZephrClose)));

;// CONCATENATED MODULE: ./src/utils/deriveIframeOriginFromRootPageOrigin.json
const deriveIframeOriginFromRootPageOrigin_namespaceObject = JSON.parse('{"http://localhost:3000":"http://localhost:3000","file://":"http://localhost:3000","https://zephr-templates-dev.cnbc.com":"https://zephr-templates-dev.cnbc.com","https://zephr-templates-stage.cnbc.com":"https://zephr-templates-stage.cnbc.com","https://stg-01web.cnbc.com":"https://zephr-templates-stage.cnbc.com","https://stg-aws01pub.cnbc.com":"https://zephr-templates-stage.cnbc.com","https://stg-03web.cnbc.com":"https://zephr-templates-stage.cnbc.com","https://stg-aws03pub.cnbc.com":"https://zephr-templates-stage.cnbc.com","https://www.cnbc.com":"https://zephr-templates.cnbc.com"}');
;// CONCATENATED MODULE: ./src/utils/deriveIframeOriginFromRootPageOrigin.js



function deriveIframeOriginFromRootPageOrigin() {
  const rootPageOrigin = utils_getRootPageOrigin();

  const isPhoenixSandboxOriginPattern = /https:\/\/[0-9]+-sandbox\.cnbc\.com$/i;
  if (rootPageOrigin.match(isPhoenixSandboxOriginPattern)) {
    const iframeOrigin =
      deriveIframeOriginFromRootPageOrigin_namespaceObject["https://zephr-templates-stage.cnbc.com"];

    return iframeOrigin;
  }

  const iframeOrigin = deriveIframeOriginFromRootPageOrigin_namespaceObject[rootPageOrigin];

  return iframeOrigin;
}

/* harmony default export */ const utils_deriveIframeOriginFromRootPageOrigin = (deriveIframeOriginFromRootPageOrigin);

;// CONCATENATED MODULE: ./src/utils/camelCaseToKebabCase.js
function camelCaseToKebabCase(camelCaseString) {
  const kebabCaseString = camelCaseString.replace(
    /[A-Z]/g,
    (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase(),
  );

  return kebabCaseString;
}

/* harmony default export */ const utils_camelCaseToKebabCase = (camelCaseToKebabCase);

;// CONCATENATED MODULE: ./src/utils/deriveRootLayoutCssTextFromProps.js


function deriveRootLayoutCssTextFromProps(props) {
  const {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    position,
    bottom,
    top,
    left,
    right,
    display,
  } = props;

  const style = {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    position,
    bottom,
    top,
    left,
    right,
    display,
  };

  const cssTextProperties = ['border: none'];
  for (const cssProperty in style) {
    const cssPropertyValue = style[cssProperty];
    cssTextProperties.push(
      `${utils_camelCaseToKebabCase(cssProperty)}: ${cssPropertyValue}`,
    );
  }

  const cssText = cssTextProperties.join(';');

  return cssText;
}

/* harmony default export */ const utils_deriveRootLayoutCssTextFromProps = (deriveRootLayoutCssTextFromProps);

;// CONCATENATED MODULE: ./src/utils/deriveOutcomeSlugFromWindowZephr.js
// In Zephr Console outcome slug is in the pathname when an outcome is selected inside of
// a feature. Outcome slug is also used in a browser context to identify an outcome rendered on
// the page.
function deriveOutcomeSlugFromWindowZephr(analyticsOutcomeId) {
  const didRunWithoutZephrReady = !window || !window.Zephr;
  if (didRunWithoutZephrReady) {
    console.error(
      'Web.Zephr:error:deriveOutcomeMetadataFromWindowZephr: window.Zephr does not exist',
    );

    return null;
  }

  const { outcomes } = window.Zephr;

  const outcomeValues = Object.values(outcomes);

  // Unfortunately there could be name collision
  const outcomeValuesWhereAnalyticsOutcomeIdMatches = outcomeValues.filter(
    ({ outcomeLabel }) => outcomeLabel === analyticsOutcomeId,
  );

  // Assumes better to bail than send bad data
  const shouldBailDueToNoOutcomeId =
    outcomeValuesWhereAnalyticsOutcomeIdMatches.length === 0;
  if (shouldBailDueToNoOutcomeId) {
    console.error(
      `Web.Zephr:deriveOutcomeMetadataFromWindowZephr: attempted to use analyticsOutcomeId "${analyticsOutcomeId}" to look up the associated Zephr outcome.
      When adding an outcome to a feature a title is required to be defined, this title is the analyticsOutcomeId and must be unique across all defined outcomes. 
      This gives us enough data to lookup the outcome in the Cn`,
    );

    return null;
  }

  const shouldBailDueToOutcomeIdCollision =
    outcomeValuesWhereAnalyticsOutcomeIdMatches.length > 1;
  if (shouldBailDueToOutcomeIdCollision) {
    console.error(
      `Web.Zephr:deriveOutcomeMetadataFromWindowZephr: analyticsOutcomeId "${analyticsOutcomeId}" is used in multiple Zephr features and must be unique.
      Please contact marketing to update the value to be unique across all Zephr Features. Until this is update Zephr's internal Analytics panel will not receive data.`,
    );

    return null;
  }

  const [outcomeMetadata] = outcomeValuesWhereAnalyticsOutcomeIdMatches;
  const { outcomeId: outcomeSlug } = outcomeMetadata;

  return outcomeSlug;
}

/* harmony default export */ const utils_deriveOutcomeSlugFromWindowZephr = (deriveOutcomeSlugFromWindowZephr);

;// CONCATENATED MODULE: ./src/utils/webZephrIframePropsMergeTopPageMetadata.js


function webZephrIframePropsMergeTopPageMetadata(webZephrIframeProps) {
  const { analyticsOutcomeId } = webZephrIframeProps;

  // Derive metadata
  const analyticsOutcomeSlug =
    utils_deriveOutcomeSlugFromWindowZephr(analyticsOutcomeId);

  // Merge into params that will be passed Web.Zephr app through <iframe src="...?key1=value1&key2=value2" />
  const newSearchParams = {
    ...webZephrIframeProps,
    analyticsOutcomeSlug,
  };

  return newSearchParams;
}

/* harmony default export */ const utils_webZephrIframePropsMergeTopPageMetadata = (webZephrIframePropsMergeTopPageMetadata);

;// CONCATENATED MODULE: ./src/utils/waitFor.js
// TODO: remove after bouncex/wunderkind decommission

/**
 * Function to wait for predicates.
 * NOTE: Temporary while we are running both Zephr and Wunderkind
 * @param {function() : Boolean} predicate - A function that returns a bool
 * @param {Number} [timeout] - Optional maximum waiting time in ms after rejected
 */
function waitFor(predicate, timeout) {
  return new Promise((resolve, reject) => {
    const check = () => {
      if (!predicate()) return;
      clearInterval(interval);
      resolve();
    };
    const interval = setInterval(check, 10);
    check();

    if (!timeout) return;
    setTimeout(() => {
      clearInterval(interval);
      reject();
    }, timeout);
  });
}

/* harmony default export */ const utils_waitFor = (waitFor);

;// CONCATENATED MODULE: ./src/utils/waitForBouncex.js
// TODO: remove after bouncex/wunderkind decommission



async function waitForBounceX() {
  try {
    // Wait for window.bouncex to exist with a timeout of X seconds
    await Promise.race([
      utils_waitFor(
        () =>
          window.hasOwnProperty('bouncex') &&
          // Value is originally initialized without campaigns defined and
          // when the script fully resolves campaigns exists
          window.bouncex.hasOwnProperty('campaigns'),
      ),
      new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              'waiting for bouncex initialization timed out after 10 seconds',
            ),
          6000,
        ),
      ),
    ]);
  } catch (e) {
    console.error(
      'Web.Zephr:onZephrInitializeComponent:error: while waiting for window.bouncex to initialize',
      e,
    );
  }
}

/* harmony default export */ const waitForBouncex = (waitForBounceX);

;// CONCATENATED MODULE: ./src/utils/isComponentCriticalUserExperiencePath.js
function isComponentCriticalUserExperiencePath(componentName) {
  const pagePattern = /^Page/;
  const gatePattern = /^Gate/;

  const name = componentName ?? '';
  const isCriticalUserExperiencePath =
    name.match(pagePattern) || name.match(gatePattern);

  return isCriticalUserExperiencePath;
}

/* harmony default export */ const utils_isComponentCriticalUserExperiencePath = (isComponentCriticalUserExperiencePath);

;// CONCATENATED MODULE: ./src/events/onZephrInitializeComponent.js






const RENDER_INLINE_CAMPAIGN_AFTER_PARAGRAPH_NUMBER = 8;

async function onZephrInitializeComponent(e) {
  const { detail = {} } = e;

  const { urlSearchParams: urlSearchParamsProp, componentName } = detail;

  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrInitializeComponent', e);
  }

  const isNonCriticalPathComponent =
    !utils_isComponentCriticalUserExperiencePath(componentName);
  if (isNonCriticalPathComponent) {
    await waitForBouncex();

    const shouldSkipDueToWunderkindCampaignConflict =
      document.querySelector('[id^=bx-campaign]') ||
      (window.bouncex && window.bouncex.campaigns);
    if (shouldSkipDueToWunderkindCampaignConflict) {
      console.info(
        'Web.Zephr:event:onZephrInitializeComponent: exit early due to presence of conflicting wunderkind campaign (e.g., [id^=bx-campaign])',
      );
      return;
    }
  }

  if (!componentName) {
    return console.error('Web.Zephr:Error: componentName is required', detail);
  }

  const isInlineComponent = /^inline/i.test(componentName);
  const isGateComponent = /^gate/i.test(componentName);
  const isTopBarComponent = /^topbar/i.test(componentName);
  const isPageComponent = /^page/i.test(componentName);

  function getTargetElementSelector() {
    if (isInlineComponent || isGateComponent) {
      return '.Article .group p';
    }

    if (isPageComponent) {
      return '.zephr-page';
    }

    return 'body';
  }

  const targetElementSelector = getTargetElementSelector();

  function getTargetElement() {
    let targetElement;
    if (isInlineComponent) {
      targetElement = document.querySelectorAll(targetElementSelector)[
        RENDER_INLINE_CAMPAIGN_AFTER_PARAGRAPH_NUMBER
      ];
    } else if (isGateComponent) {
      targetElement = [
        ...document.querySelectorAll(targetElementSelector),
      ].pop();
    } else {
      targetElement = document.querySelector(targetElementSelector);
    }

    if (!targetElement) {
      console.warn(
        `Web.Zephr:Warn: onZephrInitializeComponent event target element document.querySelector('${targetElementSelector}') does not exist.`,
        detail,
      );
    }

    return targetElement;
  }

  if (!getTargetElement()) {
    return;
  }

  const {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    position,
    bottom,
    top,
    left,
    right,
    display = 'none',
    trigger: triggerProp = null,
    intent = null,
    showDelayMilliseconds,

    ...webZephrIframeProps
  } = urlSearchParamsProp;

  const iframe = document.createElement('iframe');
  iframe.allowTransparency = true;

  const layoutProps = {
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,
    position,
    bottom,
    top,
    left,
    right,
    display,
  };

  iframe.style.cssText = utils_deriveRootLayoutCssTextFromProps(layoutProps);

  // Used by integration.css
  iframe.className = `zephrIframeOutcome ${componentName}`;

  iframe.sandbox = [
    'allow-downloads', // download pdf
    'allow-forms', // submit email
    'allow-scripts', // render app
    'allow-top-navigation', // navigate to landing pages
    'allow-same-origin', // allow access to cookies and local storage for analytics $t
    'allow-popups', // allow popups links that use _blank
  ].join(' ');

  const origin = utils_deriveIframeOriginFromRootPageOrigin();

  const webZephrIframeUrlSearchParams = new URLSearchParams(
    utils_webZephrIframePropsMergeTopPageMetadata(webZephrIframeProps),
  );

  const src = `${origin}/components/${componentName}?${webZephrIframeUrlSearchParams.toString()}`;
  iframe.src = src;

  const targetElement = getTargetElement();
  if (isInlineComponent || isGateComponent) {
    targetElement.insertAdjacentElement('afterend', iframe);
  } else if (isTopBarComponent) {
    targetElement.prepend(iframe);
  } else {
    targetElement.appendChild(iframe);
  }

  const trigger = triggerProp || intent; // backward-compatible with intent
  const selector = `[src^="${src}"]`;
  const options = {
    detail: {
      selector,
      showDelayMilliseconds,
    },
  };

  const eventType =
    trigger === 'exit' ? 'zephrobserveexittrigger' : 'onzephrshowcomponent';

  const event = new CustomEvent(eventType, options);

  return window.dispatchEvent(event);
}

window.addEventListener(
  'onzephrinitializecomponent',
  onZephrInitializeComponent,
);

/* harmony default export */ const events_onZephrInitializeComponent = ((/* unused pure expression or super */ null && (onZephrInitializeComponent)));

;// CONCATENATED MODULE: ./src/events/onZephrObserveDelayedTrigger.js
function onZephrObserveDelayedTrigger(e) {
  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrObserveDelayedTrigger', e);
  }

  const {
    detail: { selector, showDelayMilliseconds },
  } = e;

  if (!selector) {
    console.error(
      'Web.Zephr:Error: onZephrObserveDelayedTrigger event requires a selector to be passed.',
    );
  }

  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.error(
      `Web.Zephr:Error: onZephrObserveDelayedTrigger event target element "${selector}" does not exist.`,
    );
    return;
  }

  const customEvent = new CustomEvent('onzephrshowcomponent', {
    detail: { selector, showDelayMilliseconds },
  });

  window.dispatchEvent(customEvent);
}

window.addEventListener(
  'zephrobservedelayedtrigger',
  onZephrObserveDelayedTrigger,
);

/* harmony default export */ const events_onZephrObserveDelayedTrigger = ((/* unused pure expression or super */ null && (onZephrObserveDelayedTrigger)));

;// CONCATENATED MODULE: ./src/events/onZephrObserveExitTrigger.js
let onZephrObserveExitTriggerMouseEvent;
let onZephrObserveExitTriggerScrollEvent;

function onZephrObserveExitTrigger(e) {
  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrObserveExitTrigger', e);
  }

  const {
    detail: { selector, showDelayMilliseconds },
  } = e;

  if (!selector) {
    console.error(
      'Web.Zephr:Error: onZephrObserveExitTrigger event requires a selector to be passed.',
    );
  }

  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.error(
      `Web.Zephr:Error: onZephrObserveExitTrigger event target element "${selector}" does not exist.`,
    );
    return;
  }

  // remove the previous event listeners, if any
  if (onZephrObserveExitTriggerMouseEvent) {
    window.removeEventListener(
      'mousemove',
      onZephrObserveExitTriggerMouseEvent,
    );
  }
  if (onZephrObserveExitTriggerScrollEvent) {
    window.removeEventListener('scroll', onZephrObserveExitTriggerScrollEvent);
  }

  const isMobileOrTablet = window.matchMedia('(max-width: 767px)').matches;
  if (isMobileOrTablet) {
    onZephrObserveExitTriggerScrollEvent = (e) => {
      const customEventDetail = {
        selector,
        showDelayMilliseconds,
        onZephrObserveExitTriggerScrollEvent,
      };

      const customEvent = new CustomEvent('onzephrobserveexittriggerscroll', {
        detail: customEventDetail,
      });

      window.dispatchEvent(customEvent);
    };

    window.addEventListener('scroll', onZephrObserveExitTriggerScrollEvent);
  }

  // listen for mouse movements on the window
  onZephrObserveExitTriggerMouseEvent = (e) => {
    const customEventDetail = {
      clientX: e.clientX,
      clientY: e.clientY,
      selector,
      showDelayMilliseconds,
      onZephrObserveExitTriggerMouseEvent,
    };

    const customEvent = new CustomEvent('onzephrobserveexittriggermouse', {
      detail: customEventDetail,
    });

    window.dispatchEvent(customEvent);
  };

  window.addEventListener('mousemove', onZephrObserveExitTriggerMouseEvent);
}

function cleanupEventListeners() {
  if (onZephrObserveExitTriggerMouseEvent) {
    window.removeEventListener(
      'mousemove',
      onZephrObserveExitTriggerMouseEvent,
    );
  }
  if (onZephrObserveExitTriggerScrollEvent) {
    window.removeEventListener('scroll', onZephrObserveExitTriggerScrollEvent);
  }
}

// run before unloading the page
window.addEventListener('beforeunload', cleanupEventListeners);

// run after sign in event
window.addEventListener('onbedrocksigninuser', cleanupEventListeners);

// run after sign out event
window.addEventListener('onbedrocksignoutuser', cleanupEventListeners);

// listen for exit trigger
window.addEventListener('zephrobserveexittrigger', onZephrObserveExitTrigger);

/* harmony default export */ const events_onZephrObserveExitTrigger = ((/* unused pure expression or super */ null && (onZephrObserveExitTrigger)));

;// CONCATENATED MODULE: ./src/events/onZephrObserveExitTriggerMouse.js
const threshold = 50;

function onZephrObserveExitTriggerMouse(e) {
  const {
    detail: {
      clientY,
      clientX,
      selector,
      showDelayMilliseconds,
      onZephrObserveExitTriggerMouseEvent,
    },
  } = e;

  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    if (onZephrObserveExitTriggerMouseEvent) {
      window.removeEventListener(
        'mousemove',
        onZephrObserveExitTriggerMouseEvent,
      );
    }
    // should we throw an error here only in __DEV__?
    console.error(
      'Web.Zephr:Error: onZephrObserveExitTriggerMouse targetElement element does not exist.',
    );
    return;
  }

  // detect all four sides of the screen
  const shouldShowOverlay =
    clientY < threshold ||
    clientX < threshold ||
    clientX > window.innerWidth - threshold ||
    clientY > window.innerHeight - threshold;

  const customEvent = new CustomEvent('onzephrshowcomponent', {
    detail: { selector, showDelayMilliseconds },
  });

  if (shouldShowOverlay) {
    window.dispatchEvent(customEvent);
  }
}

window.addEventListener(
  'onzephrobserveexittriggermouse',
  onZephrObserveExitTriggerMouse,
);

/* harmony default export */ const events_onZephrObserveExitTriggerMouse = ((/* unused pure expression or super */ null && (onZephrObserveExitTriggerMouse)));

;// CONCATENATED MODULE: ./src/events/onZephrObserveExitTriggerScroll.js
const onZephrObserveExitTriggerScroll = (() => {
  let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  let lastTimestamp = Date.now();
  const thresholdTimeInMilliseconds = 150;

  return (e) => {
    const {
      detail: {
        selector,
        showDelayMilliseconds,
        onZephrObserveExitTriggerScrollEvent,
      },
    } = e;
    const targetElement = document.querySelector(selector);

    if (!targetElement) {
      if (onZephrObserveExitTriggerScrollEvent) {
        window.removeEventListener(
          'scroll',
          onZephrObserveExitTriggerScrollEvent,
        );
      }
      // should we throw an error here only in __DEV__?
      console.error(
        'Web.Zephr:Error: onZephrObserveExitTriggerScroll targetElement does not exist.',
      );
      return;
    }

    const customEvent = new CustomEvent('onzephrshowcomponent', {
      detail: { selector, showDelayMilliseconds },
    });

    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const currentTimestamp = Date.now();
    const timeDiff = currentTimestamp - lastTimestamp;

    if (
      currentScrollTop < lastScrollTop &&
      timeDiff < thresholdTimeInMilliseconds
    ) {
      window.dispatchEvent(customEvent);
    }

    lastScrollTop = currentScrollTop;
    lastTimestamp = currentTimestamp;
  };
})();

window.addEventListener(
  'onzephrobserveexittriggerscroll',
  onZephrObserveExitTriggerScroll,
);

/* harmony default export */ const events_onZephrObserveExitTriggerScroll = ((/* unused pure expression or super */ null && (onZephrObserveExitTriggerScroll)));

;// CONCATENATED MODULE: ./src/events/onZephrResize.js



/*
  Inspired by how AMP handles iframe resize
  https://amp.dev/documentation/components/amp-iframe#iframe-resizing
*/
function onZephrResize(e) {
  if (utils_shouldBubbleEventToParentPage()) {
    if (__DEV__) {
      console.info('Web.Zephr:info: bubble onZephrResize event');
    }
    return utils_bubbleEventToParentPage(e);
  }

  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrResize', e);
  }

  const {
    detail: { selector, heightPixels: rawHeightPixels },
  } = e;
  if (!selector) {
    console.error(
      'Web.Zephr:Error: onZephrResize event requires a selector to be passed.',
    );
  }
  if (!rawHeightPixels) {
    console.error(
      'Web.Zephr:Error: onZephrResize event requires heightPixels to be passed.',
    );
  }

  const targetElement = document.querySelector(selector);

  if (!targetElement) {
    console.error(
      `Web.Zephr:Error: onZephrResize event target element "${selector}" does not exist.`,
    );
    return;
  }

  // Ensure we have a clean input that is just numbers
  const nonNumberPattern = /[^0-9.]+/;
  const heightPixels = `${rawHeightPixels}`.replace(nonNumberPattern, '');

  return (targetElement.style.height = `${heightPixels}px`);
}

window.addEventListener('onzephrresize', onZephrResize);

/* harmony default export */ const events_onZephrResize = ((/* unused pure expression or super */ null && (onZephrResize)));

;// CONCATENATED MODULE: ./src/events/onZephrShowComponent.js
function onZephrShowComponent(e) {
  const {
    detail: { selector, showDelayMilliseconds: showDelayMillisecondsProp } = {},
  } = e;

  const showDelayMilliseconds = parseInt(showDelayMillisecondsProp ?? 0, 10);

  if (typeof showDelayMilliseconds !== 'number') {
    console.error(
      `Web.Zephr:onZephrShowComponent:error: "${showDelayMillisecondsProp}" is an invalid showDelayMilliseconds`,
      e,
    );
    return;
  }

  if (!selector) {
    console.error(
      `Web.Zephr:onZephrShowComponent:error: "${selector}" is an invalid selector`,
      e,
    );
    return;
  }

  const targetElement = document.querySelector(selector);
  if (!targetElement) {
    console.error(
      `Web.Zephr:onZephrShowComponent:error: element not found for query selector "${selector}"`,
      e,
    );
    return;
  }

  if (showDelayMilliseconds > 0) {
    return setTimeout(
      () => (targetElement.style.display = 'block'),
      showDelayMilliseconds,
    );
  }

  targetElement.style.display = 'block';
}

window.addEventListener('onzephrshowcomponent', onZephrShowComponent);

/* harmony default export */ const events_onZephrShowComponent = ((/* unused pure expression or super */ null && (onZephrShowComponent)));

;// CONCATENATED MODULE: ./src/events/onZephrUnmountAllOutcomes.js
function onZephrUnmountAllOutcomes(e) {
  if (__DEV__) {
    console.log('Web.Zephr:event: onZephrUnmountAllOutcomes', e);
  }

  const zephrOutcomes = document.querySelectorAll('.zephrIframeOutcome');

  return zephrOutcomes.forEach((element) => element.remove());
}

window.addEventListener('onzephrunmountalloutcomes', onZephrUnmountAllOutcomes);

/* harmony default export */ const events_onZephrUnmountAllOutcomes = ((/* unused pure expression or super */ null && (onZephrUnmountAllOutcomes)));

;// CONCATENATED MODULE: ./src/integration.js
















/**
 * Handles incoming postMessage events, dispatching them as CustomEvents if they originate from a trusted source.
 *
 * @param {MessageEvent} e - The message event object received from the postMessage API.
 * @returns {boolean|undefined} Returns false if the origin is untrusted or the event type is not provided, otherwise undefined.
 */
function message(e) {
  const {
    origin,
    data: { type: eventType, detail },
  } = e;

  // !IMPORTANT: For security reasons post message origin must be checked against an allowlist
  if (!utils_isTrustedOrigin(origin) || eventType === 'webpackOk' || !eventType) {
    // noop
    return;
  }

  if (__DEV__) {
    console.info(`Web.Zephr:info: post message received for ${eventType}`);
  }

  const forwardedEvent = new CustomEvent(eventType, { detail });

  // Trigger event
  return window.dispatchEvent(forwardedEvent);
}

window.addEventListener('message', message);

/* harmony default export */ const integration = ((/* unused pure expression or super */ null && (message)));

/******/ })()
;