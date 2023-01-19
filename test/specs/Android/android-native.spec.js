describe("Android Native Feature Tests", () => {
  it("Acces an Activity directly", async () => {
    // access activity
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    // pause 3s
    //await driver.pause(3000);

    // assertion
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Working with alert", async () => {
    await $(
      '//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
    ).click();

    // accept or dismissAlert
    //await driver.acceptAlert();
    await driver.dismissAlert();

    //assertion
    await expect($('//*[@id="android:id/alertTitle"]')).not.toExist();
  });
});
