describe("Android Elements Tests", () => {
  it("Find element by accessibility id", async () => {
    // find element by accessibility id
    const appOption = await $("~App");

    await appOption.click();

    // asserion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });
  it("Find element by class name", async () => {
    // find element y class name
    const className = await $("android.widget.TextView");
    console.log(await className.getText());

    // Assertion
    await expect(className).toHaveText("API Demos");
  });
  // Caute, ja dnes tiez nebudem moct prist na standup. Za mna update ze dnes planujem dokoncit uz ten kurz

  it("Find elements by Xpath", async () => {
    //xpath - (//tagname[@attribute=value])
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();
    await $(
      "//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']"
    ).click();
    
    //xpath by text
    await $("//android.widget.TextView[@text='Command two']").click();
    const textAssertion = await $("//android.widget.TextView");

    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
  it("find elements by UIAutomator", async () => {
    //always have single uvodzovky on the outside
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it("Working with multiple elements", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];

    // find multiple elements
    const textList = await $$("android.widget.TextView");

    for (const element of textList) {
      actualList.push(await element.getText());
    }

    await expect(actualList).toEqual(expectedList);
  });
  it("challenge ez", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();
    await $(
      "/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView"
    ).setValue("Canada");

    await expect(
      "/hierarchy/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView"
    ).toHaveText("Canada");
  });
  it("UIAutomator scroll", async () => {
    await $("~App").click();
    await $("~Activity").click();

    //scroll to the end (not stable if element gets moved)
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

    //scrollTextIntoView - most stable
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    //await $('~Secure Surfaces').click();
  });

  it("Horizontal scroll", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    //horizontal scrolling
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );

    await driver.pause(3000);
  });

  it.only('challenge scroll', async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );

    const currentDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
    
    await $('~change the date').click();

    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("10")'
    ).click();
    
    await $('//*[@resource-id="android:id/button1"]').click();
    const updatedtDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();

    await expect(updatedtDate).not.toEqual(currentDate);
  });
});
