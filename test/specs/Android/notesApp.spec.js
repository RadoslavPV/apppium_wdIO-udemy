import AddNoteScreen from "../../screenObjects/android/add-note.screen";

describe("Add Notes", () => {
  it("Skip tutorial", async () => {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
  });
  it("add note, save changes & verify note", async () => {
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textBtn.click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    // add note title
    await AddNoteScreen.titleInput.setValue("Fav Anime List");

    // add note body
    await AddNoteScreen.bodyInput.setValue("Naruto\nOnePiece\nAOT");

    // save to changes
    await AddNoteScreen.saveNote();

    //assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
  });
  it("challenge, delete note", async () => {
    // delte note
    await $("~More").click();
    await $('//*[@text="Delete"]').click();
    await $('//*[@text="OK"]').click();

    //assertion note is in the bin
    await AddNoteScreen.navBtn.click();
    await $('//*[@text="Trash Can"]').click();
    const trashCanItem = await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
    );

    await expect(trashCanItem).toHaveText("Fav Anime List");
  });
});
