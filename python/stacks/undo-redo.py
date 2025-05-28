class TextEditor:
    def __init__(self):
        self.text=""
        self.undo_stack =[]
        self.redo_stack =[]
    
    def type_text(self,new_text):
        self.undo_stack.append(self.text)
        self.redo_stack.clear()
        self.text += new_text
        print(f"Typed: '{new_text}' | Current text: '{self.text}'")
    def delete_text(self,num_chars):
        self.undo_stack.append(self.text)
        self.redo_stack.clear()
        self.text = self.text[:-num_chars]
        print(f"Deleted {num_chars} chars | Current text: '{self.text}'")
    def undo(self):
        if self.undo_stack:
            self.redo_stack.append(self.text)
            self.text = self.undo_stack.pop()
            print(f"Undo | Current text: '{self.text}'")
        else:
            print('Noting to undo')
    def redo(self):
        if self.redo_stack:
            self.undo_stack.append(self.text)
            self.text = self.redo_stack.pop()
            print(f"Redo | Current text: '{self.text}'")
        else:
            print('Nothing to redo')


editor = TextEditor()
editor.type_text('Hello World')
editor.delete_text(6)
editor.undo()
editor.redo()
