import { useNavigate } from "react-router-dom";
import usePostForm from "./services/usePostForm";
import { POST_CATEGORY_TYPE } from "src/constants/post";
import { extractKeys } from "src/lib/objectUtils";
import Input from "src/components/input/Input";

function CommunitPositngPage() {
  const navigation = useNavigate();
  const { handleSubmit, register, onSubmit, formError, validationRules, error } = usePostForm();
  return (
    <div className=" grid justify-items-stretch mt-20 mx-auto w-3/6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                  카테고리
                </label>
                <div className="mt-2">
                  <select
                    {...register("category")}
                    id="category"
                    name="category"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                  >
                    {extractKeys(POST_CATEGORY_TYPE).map((category) => (
                      <option value={POST_CATEGORY_TYPE[category].value}>{POST_CATEGORY_TYPE[category].name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <Input
                  {...register("title", validationRules.title)}
                  type="text"
                  label="제목"
                  error={formError.title?.message}
                />
              </div>

              <div className="col-span-full">
                <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                  내용
                </label>
                <div className="mt-2">
                  <textarea
                    {...register("content", validationRules.content)}
                    id="content"
                    name="content"
                    rows={3}
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                  {!!formError.content?.message && (
                    <span className="block mt-1 text-sm/6 font-medium text-red">{formError.content?.message}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button onClick={() => navigation(-1)} type="button" className="text-sm/6 font-semibold text-gray-900">
            취소
          </button>
          <button
            type="submit"
            className="rounded-md bg-red px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red"
          >
            등록하기
          </button>
        </div>
        {!!error && <span className="block mt-1 text-sm/6 font-medium text-red">{error}</span>}
      </form>
    </div>
  );
}

export default CommunitPositngPage;
