import { useMutation } from "@tanstack/react-query";
import { submitForm as submit } from "../services/submitForm";

export function useSubmitForm(){
    const {isPending, mutate:submitForm} = useMutation({
        mutationFn: submit,
    })
    return {isPending, submitForm};
}