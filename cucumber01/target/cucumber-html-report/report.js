$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("creditscore.feature");
formatter.feature({
  "line": 2,
  "name": "to sanction loan",
  "description": "",
  "id": "to-sanction-loan",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"\u003cofficetype\u003e\" office",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"\u003ccreditScore\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"\u003camount\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;",
  "rows": [
    {
      "cells": [
        "officetype",
        "creditScore",
        "amount"
      ],
      "line": 14,
      "id": "to-sanction-loan;;;1"
    },
    {
      "cells": [
        "govt",
        "200",
        "zero"
      ],
      "line": 15,
      "id": "to-sanction-loan;;;2"
    },
    {
      "cells": [
        "govt",
        "500",
        "4lakhs"
      ],
      "line": 16,
      "id": "to-sanction-loan;;;3"
    },
    {
      "cells": [
        "private",
        "200",
        "5lakhs"
      ],
      "line": 17,
      "id": "to-sanction-loan;;;4"
    },
    {
      "cells": [
        "private",
        "200",
        "6lakhs"
      ],
      "line": 18,
      "id": "to-sanction-loan;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 150400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 80818100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"govt\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"zero\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "govt",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 1594600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 55200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zero",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.after({
  "duration": 28000,
  "status": "passed"
});
formatter.before({
  "duration": 49100,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 47400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"govt\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"4lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "govt",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 128400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 95800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 92400,
  "status": "passed"
});
formatter.after({
  "duration": 35700,
  "status": "passed"
});
formatter.before({
  "duration": 42400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 86500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"private\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"5lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "private",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 83100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 59200,
  "status": "passed"
});
formatter.after({
  "duration": 33900,
  "status": "passed"
});
formatter.before({
  "duration": 42700,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"private\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"6lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "private",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 83000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 62900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 58700,
  "status": "passed"
});
formatter.after({
  "duration": 27600,
  "status": "passed"
});
});