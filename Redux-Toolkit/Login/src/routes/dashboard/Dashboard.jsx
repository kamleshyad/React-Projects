import { useSelector } from "react-redux"

export const Dashboard = () => {

  const { username, isAuthenticated } = useSelector((state) => state.auth)
    return(
      <>
        {isAuthenticated ? (
          <p>Welcome, {username}!</p>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </>
    )
}