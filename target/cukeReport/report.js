$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Resources/Features/AdminDemoP1.feature");
formatter.feature({
  "line": 2,
  "name": "I an able to get discount",
  "description": "",
  "id": "i-an-able-to-get-discount",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AdminDemoP1"
    }
  ]
});
formatter.before({
  "duration": 11144653094,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I am able to det discount on this website successfully",
  "description": "",
  "id": "i-an-able-to-get-discount;i-am-able-to-det-discount-on-this-website-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on promotion",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select discount from promotion",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on add new button of the right hand side of the page corner",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter tex name field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on user percentage",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter 10 percentage discount on discount percentage field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select start date",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select end date",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter text in admin comment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I able to added discount successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDef.i_am_on_login_page()"
});
formatter.result({
  "duration": 94605324,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_login_button()"
});
formatter.result({
  "duration": 3201764575,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_promotion()"
});
formatter.result({
  "duration": 239505661,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_discount_from_promotion()"
});
formatter.result({
  "duration": 2007827370,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_add_new_button_of_the_right_hand_side_of_the_page_corner()"
});
formatter.result({
  "duration": 1206133329,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_tex_name_field()"
});
formatter.result({
  "duration": 150880375,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_user_percentage()"
});
formatter.result({
  "duration": 115260455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 8
    }
  ],
  "location": "MyStepDef.i_enter_percentage_discount_on_discount_percentage_field(int)"
});
formatter.result({
  "duration": 480347840,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_start_date()"
});
formatter.result({
  "duration": 100710850,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_select_end_date()"
});
formatter.result({
  "duration": 21926,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_enter_text_in_admin_comment()"
});
formatter.result({
  "duration": 29856,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_click_on_save_button()"
});
formatter.result({
  "duration": 21926,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDef.i_able_to_added_discount_successfully()"
});
formatter.result({
  "duration": 22858,
  "status": "passed"
});
formatter.after({
  "duration": 15395,
  "status": "passed"
});
});