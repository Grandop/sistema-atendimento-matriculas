import { useState } from "react";
import * as S from "./styles";
import { OfferCard } from "../../components/OfferCard";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";

export const InstitutionalView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [newOffer, setNewOffer] = useState({
    title: "",
    teacher: "",
    schedule: "",
  });
  const [offers, setOffers] = useState([
    { id: 1, title: "Matemática", teacher: "João", schedule: "21" },
    { id: 2, title: "História", teacher: "Maria", schedule: "33" },
  ]);

  const handleNewOffer = () => {
    setModalOpen(true);
  };

  const handleSaveOffer = () => {
    setOffers((prevOffers) => [
      ...prevOffers,
      { id: offers.length + 1, ...newOffer },
    ]);
    setNewOffer({ title: "", teacher: "", schedule: "" });
    setModalOpen(false);
  };

  return (
    <S.Container>
      <S.Title>Gerenciamento de Ofertas de Turmas</S.Title>
      <S.NewOfferButton onClick={handleNewOffer}>
        Criar Nova Oferta
      </S.NewOfferButton>
      <div>
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.title}
            teacher={offer.teacher}
            schedule={offer.schedule}
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
