#include <stdio.h>
#include "circular_queue.h"

void initQueue(CircularQueue *q){
    q->front =0;
    q->rear =0;
    q->size=0;
}

int isFull(CircularQueue *q){
    return q->size == MAX_SIZE;
}
int isEmpty(CircularQueue *q){
    return q->size == 0;
}
void enqueue(CircularQueue *q, int value){
    if(isFull(q)){
        printf("Queue is full!\n");
        return;
    }
    q->items[q->rear] = value;
    q->rear = (q->rear + 1) % MAX_SIZE;
    q->size++;
    printf("Enqueued: %d\n", value);
}
int dequeue(CircularQueue *q) {
    if (isEmpty(q)) {
        printf("Queue is empty!\n");
        return -1;
    }
    int value = q->items[q->front];
    q->front = (q->front + 1) % MAX_SIZE;
    q->size--;
    return value;
}
void displayQueue(CircularQueue *q) {
    printf("Queue: ");
    for (int i = 0; i < q->size; i++) {
        int index = (q->front + i) % MAX_SIZE;
        printf("%d ", q->items[index]);
    }
    printf("\n");
}