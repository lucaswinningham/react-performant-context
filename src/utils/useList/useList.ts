import { useCallback } from 'react';

type IdFunction<Element, Id> = (item: Element) => Element | Id;

type UseListConfig<Element, Id> = {
  list: Element[],
  setList: (callback: (elements: Element[]) => Element[]) => void,
  id?: IdFunction<Element, Id>;
};

type MutateListCallback<Element> = (item: Element) => void | { cancelIf?: boolean };
type MutateList<Element> = (item: Element, callback?: MutateListCallback<Element>) => void;
type ToggleItemCallbacks<Element> = { onAdd?: MutateListCallback<Element>; onRemove?: MutateListCallback<Element> };
type ToggleItem<Element> = (item: Element, callbacks?: ToggleItemCallbacks<Element>) => void;

type Return<Element> = {
  add: MutateList<Element>;
  remove: MutateList<Element>;
  toggle: ToggleItem<Element>;
};

export const useList = <Element, Id = Element>(
  {
    list,
    setList,
    id = (item: Element) => item,
  }: UseListConfig<Element, Id>): Return<Element> => {
  const idList = list.map(id);

  const itemIsInList = useCallback(
    (item: Element): boolean => idList.includes(id(item)),
    [id, idList],
  );

  const addItemToList = useCallback(
    (item: Element) => setList((previousList) => [...previousList, item]),
    [setList],
  );

  const removeItemFromList = useCallback(
    (item: Element) => (
      setList((previousList) => previousList.filter(
        (previousItem) => id(previousItem) !== id(item),
      ))
    ),
    [id, setList],
  );

  const add = useCallback((item: Element, onAdd: MutateListCallback<Element> = () => {}) => {
    if (!itemIsInList(item)) {
      const { cancelIf } = onAdd(item) ?? {};

      if (!cancelIf) {
        addItemToList(item);
      }
    }
  }, [addItemToList, itemIsInList]);

  const remove = useCallback(
    (item: Element, onRemove: MutateListCallback<Element> = () => {}) => {
      if (itemIsInList(item)) {
        const { cancelIf } = onRemove(item) ?? {};

        if (!cancelIf) {
          removeItemFromList(item);
        }
      }
    },
    [itemIsInList, removeItemFromList],
  );

  const toggle = useCallback(
    (item: Element, { onAdd, onRemove }: ToggleItemCallbacks<Element> = {}) => (
      itemIsInList(item) ? remove(item, onRemove) : add(item, onAdd)
    ),
    [add, itemIsInList, remove],
  );

  return { add, remove, toggle };
};
