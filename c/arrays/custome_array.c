#include <stdio.h>
#include <stdlib.h>

typedef struct
{
    int *data;
    int length;
    int capacity;
} DynamicArray;

DynamicArray *createArray(int initialCapacity)
{
    DynamicArray *arr = malloc(sizeof(DynamicArray));
    arr->data = malloc(initialCapacity * sizeof(int));
    arr->length = 0;
    arr->capacity = initialCapacity;
    return arr;
}

void resize(DynamicArray *arr)
{
    int newCapacity = arr->capacity * 2;
    int *newData = malloc(newCapacity * sizeof(int));

    // Copy old data
    for (int i = 0; i < arr->length; i++)
    {
        newData[i] = arr->data[i];
    }

    // Free old memory and update
    free(arr->data);
    arr->data = newData;
    arr->capacity = newCapacity;

    printf("Resized to capacity %d\n", newCapacity);
}

void insert(DynamicArray *arr, int item)
{
    if (arr->length >= arr->capacity)
    {
        resize(arr);
    }

    arr->data[arr->length] = item;
    arr->length++;
}

void printArray(DynamicArray *arr)
{
    for (int i = 0; i < arr->length; i++)
    {
        printf("%d ", arr->data[i]);
    }
    printf("\n");
}

int main()
{
    DynamicArray *arr = createArray(2);
    for (int i = 1; i <= 10; i++)
    {
        insert(arr, i * 10);
    }
    printArray(arr);

    // Free memory
    free(arr->data);
    free(arr);

    return 0;
}
