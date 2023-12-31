import { Platform } from "./useGames";
import useData from "./useData";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents", { params: {} }, []);

export default usePlatforms;
