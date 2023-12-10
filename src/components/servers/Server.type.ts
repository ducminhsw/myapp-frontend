export type Server = {
    _id: string,
    title: string
    headOfServer: 
        {
            user: string;
        }[]
    ,
    type: number
    channels: {
        channel_name: string,
        headOfChannel: {
          channel: string
        }[]
    }[],
    participants: {
        user: string
    }[] | [],
    joinRequest: {
        userId: string,
        username: string
    }[] | [],
    muted: {
        _id:string
    }[] | [],
    banned: {
        _id:string
    }[] | []
}