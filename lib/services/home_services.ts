import http from "../http-common";
import IMainInfoData from "../model/IHonmeInfoData";
const getAll =async  () => {
    return await  http.get<IMainInfoData>("home");
};

const TutorialService = {
    getAll
}

export default TutorialService;