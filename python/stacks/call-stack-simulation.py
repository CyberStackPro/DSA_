class CallStack:
    def __init__(self):
        self.stack = []
    
    def call_function(self, function_name, parameters=None):
        frame = {
            'function': function_name,
            'parameters': parameters or {},
            'local_vars': {}
        }
        self.stack.append(frame)
        print(f"Called {function_name}")
        self.display_stack()
    
    def return_from_function(self):
        if self.stack:
            frame = self.stack.pop()
            print(f"Returned from {frame['function']}")
            self.display_stack()
        else:
            print("No function to return from")
    
    def display_stack(self):
        print("Call Stack:")
        for i, frame in enumerate(reversed(self.stack)):
            indent = "  " * i
            print(f"{indent}└─ {frame['function']}")
        print()

# Simulate function calls
call_stack = CallStack()
call_stack.call_function("main")
call_stack.call_function("processData", {"data": [1, 2, 3]})
call_stack.call_function("validateInput", {"input": "test"})
call_stack.return_from_function()
call_stack.return_from_function()
call_stack.return_from_function()