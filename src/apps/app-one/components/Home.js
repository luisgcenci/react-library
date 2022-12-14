import React from "react";
import styles from "apps/app-one/css/Home.module.css";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { updateStatus } from "store/features/sampleSlice";
import Button from "./Button";

const Home = () => {
  const status = useAppSelector((state) => state.sample.status);
  const dispatch = useAppDispatch();

  const changeStatus = () => {
    dispatch(updateStatus(!status));
  };

  return (
    <div className={styles.Home}>
      <Button />
    </div>
  );
};

export default Home;
