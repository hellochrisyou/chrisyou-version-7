import {
  VERSION_1_DETAILS_LOOKUP,
  VERSION_2_DETAILS_LOOKUP,
  VERSION_3_DETAILS_LOOKUP,
  VERSION_4_DETAILS_LOOKUP,
  VERSION_5_DETAILS_LOOKUP,
} from 'src/app/shared/models/enum';
import { VersionDetails } from 'src/app/shared/models/interface';

export const HYDRATE_VERSION_DETAILS_CARD = (versionNum: number): VersionDetails => {
  let tmpVersionDetails: VersionDetails = {};
  switch (versionNum) {
    case 1: {
      tmpVersionDetails.linesOfCode = VERSION_1_DETAILS_LOOKUP.LINES_OF_CODE;
      tmpVersionDetails.hoursWorked = VERSION_1_DETAILS_LOOKUP.HOURS_WORKED;
      tmpVersionDetails.size = VERSION_1_DETAILS_LOOKUP.SIZE;
      tmpVersionDetails.htmlPercentage = VERSION_1_DETAILS_LOOKUP.HTML_PERCENTAGE;
      tmpVersionDetails.cssPercentage = VERSION_1_DETAILS_LOOKUP.CSS_PERCENTAGE;
      tmpVersionDetails.scssPercentage = VERSION_1_DETAILS_LOOKUP.SCSS_PERCENTAGE;
      tmpVersionDetails.javascriptPercentage = VERSION_1_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE;
      tmpVersionDetails.typescriptPercentage = VERSION_1_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE;
      tmpVersionDetails.externalLibraries = [];
      tmpVersionDetails.externalLibraries.push('Bootstrap');
      tmpVersionDetails.externalLibraries.push('Jquery');
      tmpVersionDetails.features = [];
      tmpVersionDetails.features.push('Charts');
      tmpVersionDetails.features.push('Timeline');
      break;
    }
    case 2: {
      tmpVersionDetails.linesOfCode = VERSION_2_DETAILS_LOOKUP.LINES_OF_CODE;
      tmpVersionDetails.hoursWorked = VERSION_2_DETAILS_LOOKUP.HOURS_WORKED;
      tmpVersionDetails.size = VERSION_2_DETAILS_LOOKUP.SIZE;
      tmpVersionDetails.htmlPercentage = VERSION_2_DETAILS_LOOKUP.HTML_PERCENTAGE;
      tmpVersionDetails.cssPercentage = VERSION_2_DETAILS_LOOKUP.CSS_PERCENTAGE;
      tmpVersionDetails.scssPercentage = VERSION_2_DETAILS_LOOKUP.SCSS_PERCENTAGE;
      tmpVersionDetails.javascriptPercentage = VERSION_2_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE;
      tmpVersionDetails.typescriptPercentage = VERSION_2_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE;
      tmpVersionDetails.externalLibraries = [];
      tmpVersionDetails.externalLibraries.push('Angular Material');
      tmpVersionDetails.externalLibraries.push('Angular-Vertical-Timeline');
      tmpVersionDetails.externalLibraries.push('Animate.css');
      tmpVersionDetails.externalLibraries.push('Jquery');
      tmpVersionDetails.externalLibraries.push('Ng-Bootstrap');
      tmpVersionDetails.externalLibraries.push('Ng2-Charts');
      tmpVersionDetails.externalLibraries.push('Ngx-Owl-Carousel');
      tmpVersionDetails.features = [];
      tmpVersionDetails.features.push('Animation');
      tmpVersionDetails.features.push('Charts');
      tmpVersionDetails.features.push('Timeline');
      break;
    }
    case 3: {
      tmpVersionDetails.linesOfCode = VERSION_3_DETAILS_LOOKUP.LINES_OF_CODE;
      tmpVersionDetails.hoursWorked = VERSION_3_DETAILS_LOOKUP.HOURS_WORKED;
      tmpVersionDetails.size = VERSION_3_DETAILS_LOOKUP.SIZE;
      tmpVersionDetails.htmlPercentage = VERSION_3_DETAILS_LOOKUP.HTML_PERCENTAGE;
      tmpVersionDetails.cssPercentage = VERSION_3_DETAILS_LOOKUP.CSS_PERCENTAGE;
      tmpVersionDetails.scssPercentage = VERSION_3_DETAILS_LOOKUP.SCSS_PERCENTAGE;
      tmpVersionDetails.javascriptPercentage = VERSION_3_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE;
      tmpVersionDetails.typescriptPercentage = VERSION_3_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE;
      tmpVersionDetails.externalLibraries = [];
      tmpVersionDetails.externalLibraries.push('Angular Material');
      tmpVersionDetails.externalLibraries.push('Angular-Flex');
      tmpVersionDetails.externalLibraries.push('Jquery');
      tmpVersionDetails.features = [];
      tmpVersionDetails.features.push('Animation');
      tmpVersionDetails.features.push('Charts');
      tmpVersionDetails.features.push('Embedded SoundCloud');
      tmpVersionDetails.features.push('Timeline');

      break;
    }
    case 4: {
      tmpVersionDetails.linesOfCode = VERSION_4_DETAILS_LOOKUP.LINES_OF_CODE;
      tmpVersionDetails.hoursWorked = VERSION_4_DETAILS_LOOKUP.HOURS_WORKED;
      tmpVersionDetails.size = VERSION_4_DETAILS_LOOKUP.SIZE;
      tmpVersionDetails.htmlPercentage = VERSION_4_DETAILS_LOOKUP.HTML_PERCENTAGE;
      tmpVersionDetails.cssPercentage = VERSION_4_DETAILS_LOOKUP.CSS_PERCENTAGE;
      tmpVersionDetails.scssPercentage = VERSION_4_DETAILS_LOOKUP.SCSS_PERCENTAGE;
      tmpVersionDetails.javascriptPercentage = VERSION_4_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE;
      tmpVersionDetails.typescriptPercentage = VERSION_4_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE;
      tmpVersionDetails.externalLibraries = [];
      tmpVersionDetails.externalLibraries.push('Animate.css');
      tmpVersionDetails.externalLibraries.push('Angular Material');
      tmpVersionDetails.externalLibraries.push('Angular-Flex');
      tmpVersionDetails.externalLibraries.push('Jquery');
      tmpVersionDetails.features = [];
      tmpVersionDetails.features.push('Animation');
      tmpVersionDetails.features.push('Embedded SoundCloud');
      tmpVersionDetails.features.push('Timeline');
      break;
    }
    case 5: {
      tmpVersionDetails.linesOfCode = VERSION_5_DETAILS_LOOKUP.LINES_OF_CODE;
      tmpVersionDetails.hoursWorked = VERSION_5_DETAILS_LOOKUP.HOURS_WORKED;
      tmpVersionDetails.size = VERSION_5_DETAILS_LOOKUP.SIZE;
      tmpVersionDetails.htmlPercentage = VERSION_5_DETAILS_LOOKUP.HTML_PERCENTAGE;
      tmpVersionDetails.cssPercentage = VERSION_5_DETAILS_LOOKUP.CSS_PERCENTAGE;
      tmpVersionDetails.scssPercentage = VERSION_5_DETAILS_LOOKUP.SCSS_PERCENTAGE;
      tmpVersionDetails.javascriptPercentage = VERSION_5_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE;
      tmpVersionDetails.typescriptPercentage = VERSION_5_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE;
      tmpVersionDetails.externalLibraries = [];
      tmpVersionDetails.externalLibraries.push('Animate.css');
      tmpVersionDetails.externalLibraries.push('Angular Material');
      tmpVersionDetails.externalLibraries.push('Angular-Flex');
      tmpVersionDetails.externalLibraries.push('Jquery');
      tmpVersionDetails.features = [];
      tmpVersionDetails.features.push('Animation');
      tmpVersionDetails.features.push('Embedded SoundCloud');
      tmpVersionDetails.features.push('Embedded Stackblitz');
      tmpVersionDetails.features.push('Splash Screen');
      tmpVersionDetails.features.push('Timeline');
      break;
    }
  }
  return tmpVersionDetails;
}

export const HYDRATE_VERSION_PIE_DATA = (versionNum: number): Array<Array<string | number>> => {
  let tmpPieDataArray: any;

  switch (versionNum) {
    case 1: {
      tmpPieDataArray = [
        {
          "value": VERSION_1_DETAILS_LOOKUP.HTML_PERCENTAGE,
          "name": "HTML"
        },
        {
          "value": VERSION_1_DETAILS_LOOKUP.CSS_PERCENTAGE,
          "name": "CSS"
        },
        {
          "value": VERSION_1_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE,
          "name": "Javascript"
        },
      ];
      break;
    }
    case 2: {
      tmpPieDataArray = [
        {
          "value": VERSION_2_DETAILS_LOOKUP.HTML_PERCENTAGE,
          "name": "HTML"
        },
        {
          "value": VERSION_2_DETAILS_LOOKUP.CSS_PERCENTAGE,
          "name": "CSS"
        },
        {
          "value": VERSION_2_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE,
          "name": "Javascript"
        },
        {
          "value": VERSION_2_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE,
          "name": "Typescript"
        },
      ];
      break;
    }
    case 3: {
      tmpPieDataArray = [
        {
          "value": VERSION_3_DETAILS_LOOKUP.HTML_PERCENTAGE,
          "name": "HTML"
        },
        {
          "value": VERSION_3_DETAILS_LOOKUP.CSS_PERCENTAGE,
          "name": "CSS"
        },
        {
          "value": VERSION_3_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE,
          "name": "Javascript"
        },
        {
          "value": VERSION_3_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE,
          "name": "Typescript"
        },
      ];
      break;
    }
    case 4: {
      tmpPieDataArray = [
        {
          "value": VERSION_4_DETAILS_LOOKUP.HTML_PERCENTAGE,
          "name": "HTML"
        },
        {
          "value": VERSION_4_DETAILS_LOOKUP.CSS_PERCENTAGE,
          "name": "CSS"
        },
        {
          "value": VERSION_4_DETAILS_LOOKUP.SCSS_PERCENTAGE,
          "name": "SCSS"
        },
        {
          "value": VERSION_4_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE,
          "name": "Javascript"
        },
        {
          "value": VERSION_4_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE,
          "name": "Typescript"
        },
      ];
      break;
    }
    case 5: {
      tmpPieDataArray = [
        {
          "value": VERSION_5_DETAILS_LOOKUP.HTML_PERCENTAGE,
          "name": "HTML"
        },
        {
          "value": VERSION_5_DETAILS_LOOKUP.SCSS_PERCENTAGE,
          "name": "SCSS"
        },
        {
          "value": VERSION_5_DETAILS_LOOKUP.JAVASCRIPT_PERCENTAGE,
          "name": "Javascript"
        },
        {
          "value": VERSION_5_DETAILS_LOOKUP.TYPESCRIPT_PERCENTAGE,
          "name": "Typescript"
        },
      ];
      break;
    }
  }
  return tmpPieDataArray;
}

export const HYDRATE_VERSION_LINK = (versionNum: number): string => {
  let tmpStr = '';
  switch (versionNum) {
    case 1: {
      tmpStr = 'http://www.1st-version.chrisyou.com';
      break;
    }
    case 2: {
      tmpStr = 'http://www.2nd-version.chrisyou.com';
      break;
    }
    case 3: {
      tmpStr = 'http://www.3rd-version.chrisyou.com';
      break;
    }
    case 4: {
      tmpStr = 'http://www.4th-version.chrisyou.com';
      break;
    }
    case 5: {
      tmpStr = 'http://www.5th-version.chrisyou.com';
      break;
    }
  }
  return tmpStr;
}
