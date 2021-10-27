import { useHistory } from 'react-router'

function useRoutes() {
  const history = useHistory();

  const handleRoutes = (route) => {
    return history.push(route)
  }

  return handleRoutes
}

export default useRoutes
