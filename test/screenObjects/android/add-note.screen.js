class AddNoteScreen {
  get skipBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    );
  }
  get addNoteTxt() {
    return $('//*[@text="Add note"]');
  }
  get textBtn() {
    return $('//*[@text="Text"]');
  }

  get titleInput() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get bodyInput() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get editBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    );
  }

  get navBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
    );
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }
}

export default new AddNoteScreen();
