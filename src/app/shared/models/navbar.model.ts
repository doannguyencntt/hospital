export class User{
    constructor(
        public Id: number = 0,
        public HoTen:string = null,
        public SoDIenThoai: string = null,
        public Email:string = null,
        public SoChungMinhThu: string = null,
        public DiaChi:string = null,
        public UserNotifications: Array<UserNotification> = null,
        public UserNotificationsCount: number = null,
        public UserTasks: Array<UserTask> = null,
        public UserTasksCount: number = null
    ){}
}

export class UserNotification{
    constructor(
        public Id: number = null,
        public UserId: number = null,
        public NotificationId: number = null,
        public IsRead: boolean = false,
        public Notification: Notification = null
    ){}
}

export class UserTask{
    constructor(
        public Id: number = null,
        public UserId: number = null,
        public TaskId: number = null,
        public IsRead: boolean = null,
        public Task: Task = null
    ){}
}

export class Notification{
    constructor(
        public Id: number = null,
        public WorkflowId: number = null,
        public WorkflowType: number = null,
        public WorkflowStatus: number = null,
        public Title: string = null,
        public Body: string = null,
        public Link: string = null,
        public MessagePriority: number = null,
        public IsRead: boolean = false,
        public CountUnRead: number = null
    ){}
}

export class NotificationDetail{
    constructor(
        public CountUnRead: number = null,
        public ListNotification: Array<Notification> = null
    ){}
}

export class Task{
    constructor(
        public Id: number = null,
        public WorkflowId: number = null,
        public WorkflowType: number = null,
        public WorkflowStatus: number = null,
        public Title: string = null,
        public Body: string = null,
        public Link: string = null,
        public MessagePriority: number = null,
        public TaskStatus: number = null,
        public ExecutedByUserId: number = null,
        public IsRead: boolean = false,
        public CountUnRead: null = null
    ){}
}

export class TaskDetail{
    constructor(
        public CountUnRead: number = null,
        public ListTask: Array<Task> = null
    ){}
}

export enum EnumMessagingType{
    Task = 1,
    Notification = 2,
    SMS = 3,
    Email = 4
}