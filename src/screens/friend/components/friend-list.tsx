import { IFriendItem } from "../friend-constant"

interface Props {
    friendDataSource: IFriendItem[];
}

export const FriendList = ({
    friendDataSource
}: Props) => {
  return (
    <>
    {friendDataSource.map((friendItem: IFriendItem, index: number) => {

    })}
    </>
  )
}
