import { Song } from "@/types";

import usePlayer from "@/hooks/usePLayer";
import useAuthModal from "@/hooks/useAuthModal";
import {useUser} from "@/hooks/useUser";
import useSubscribeModal from "./useSubscribeModal";

const useOnPlay = (songs: Song[]) => {
    const player = usePlayer();
    const authModal = useAuthModal();
    const { user, subscription } = useUser();
    const subscribeModal = useSubscribeModal();

    const onPlay = (id: string) => {
        if (!user) {
            return authModal.onOpen();
        }

        if (!subscription) {
            return subscribeModal.onOpen();
        }

        player.setId(id);
        player.setIds(songs.map((song) => song.id));
    }

    return onPlay;
};

export default useOnPlay;
