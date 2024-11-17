import { useState } from "react";
import * as S from "./styles";
import { OfferCard } from "../../components/OfferCard";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { useTeacherOffersQuery } from "../../services/institutional/GetOffers/useGetOffers";
import { useCreateOfferMutate } from "../../services/institutional/CreateOffer/useCreateOffer";

export const InstitutionalView = () => {
  const navigate = useNavigate();
  const { mutate: createOffer } = useCreateOfferMutate();
  const { data: offersTeacher, refetch } = useTeacherOffersQuery();
  const [isModalOpen, setModalOpen] = useState(false);
  const [newOffer, setNewOffer] = useState({
    title: "",
    teacher: "",
    schedule: "",
  });

  const handleNewOffer = () => {
    setModalOpen(true);
  };

  const handleSaveOffer = () => {
    const offerData = {
      nomeTurma: newOffer.title,
      nomeProf: newOffer.teacher,
      turno: newOffer.schedule,
    };
    createOffer(offerData, {
      onSuccess: () => {
        refetch();
        setNewOffer({ title: "", teacher: "", schedule: "" });
        setModalOpen(false);
      },
      onError: (error) => {
        console.error("Erro ao criar oferta:", error);
      },
    });
  };

  return (
    <S.Container>
      <S.Title>Gerenciamento de Ofertas de Turmas</S.Title>
      <S.NewOfferButton onClick={handleNewOffer}>
        Criar Nova Oferta
      </S.NewOfferButton>
      <div>
        {offersTeacher?.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.nomeTurma}
            teacher={offer.nomeProf}
            schedule={offer.turno}
          />
        ))}
      </div>
      <S.BackButton onClick={() => navigate("/")}>Voltar</S.BackButton>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <S.ModalTitle>Nova Oferta</S.ModalTitle>
          <S.Input
            placeholder="Título da turma"
            value={newOffer.title}
            onChange={(e) =>
              setNewOffer((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <S.Input
            placeholder="Nome do professor"
            value={newOffer.teacher}
            onChange={(e) =>
              setNewOffer((prev) => ({ ...prev, teacher: e.target.value }))
            }
          />
          <S.Input
            placeholder="Horário/Período (ex: 21)"
            value={newOffer.schedule}
            onChange={(e) =>
              setNewOffer((prev) => ({ ...prev, schedule: e.target.value }))
            }
          />
          <S.SaveButton onClick={handleSaveOffer}>Salvar</S.SaveButton>
        </Modal>
      )}
    </S.Container>
  );
};
