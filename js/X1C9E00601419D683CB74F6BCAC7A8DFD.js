((e,t)=>{const a={shopData:{tsId:"X1C9E00601419D683CB74F6BCAC7A8DFD",certificateType:"CLASSIC",plusProtectionAmount:0,basicProtectionAmount:0,language:"de",mainProtectionCurrency:"EUR",targetMarket:"DEU",serviceItems:["REVIEW_COLLECTOR","GUARANTEE_RECOG_CLASSIC_INTEGRATION","SHOP_CONSUMER_MEMBERSHIP","INDIVIDUAL_REVIEW_FORM","NET_RECOMMENDATION_SCORE","DISABLE_REVIEWREQUEST_SENDING","MARS_EVENTS","MARS_REVIEWS","MARS_QUESTIONNAIRE","MARS_PUBLIC_QUESTIONNAIRE","PRODUCT_REVIEWS"],configurationItems:[],valid:"WIDGET",certificateState:"PRODUCTION",name:"maxinutrition.de",maxProtectionAmount:100,maxProtectionDuration:30},eTrustedRefs:{accountRef:"acc-2c5fa1c7-7d04-4087-af8b-30f049d1aa69",channelRef:"chl-b8d3af49-63c5-47cc-b20c-c5dfee236c95"},fullConsentManagementSolutionEnabled:"OFF",reviews:[{average:5,buyerStatement:"Alles TippiToppi 💪🏻👍🏻👍🏻👍🏻😂",changeDate:"29.8.2023"},{average:5,buyerStatement:"Die Lieferung kam schneller als angegeben. Die Artikel sind wie erwartet super.",changeDate:"31.10.2023"},{average:5,buyerStatement:"Super schnelle Lieferung, Tolle Ware, gute Verpackung, guter Preis",changeDate:"25.8.2023"}],rating:{averageRating:4.87,averageRatingCount:144,overallRatingCount:1020},"process.env":{STAGE:"prod"},externalConfig:{trustbadgeScriptUrl:"https://widgets.trustedshops.com/assets/trustbadge.js",cdnDomain:"widgets.trustedshops.com"},displayVariant:"full",variant:"full",elementIdSuffix:"-98e3dadd90eb493088abdc5597a70810",buildTimestamp:"2023-11-10T05:01:58.984Z",buildStage:"prod",basicProtectionAmount:100,plusProtectionAmount:2e4,sstsIntegrationParameters:null,twoLetterCountryCode:"DE"},r=a=>{const{trustbadgeScriptUrl:r}=a.externalConfig;let n=t.querySelector(`script[src="${r}"]`);n&&t.body.removeChild(n),n=t.createElement("script"),n.src=r,n.charset="utf-8",n.setAttribute("data-type","trustbadge-business-logic"),n.onerror=()=>{throw new Error(`The Trustbadge script could not be loaded from ${r}. Have you maybe selected an invalid TSID?`)},n.onload=()=>{e.trustbadge?.load(a)},t.body.appendChild(n)};"complete"===t.readyState?r(a):e.addEventListener("load",(()=>{r(a)}))})(window,document);